-module(ws_handler).

-export([init/2]).
-export([websocket_handle/3]).
-export([websocket_info/3]).


-record(state, {
          ref :: reference(),
          count = 0 :: non_neg_integer()
         }).


init(Req, _Opts) ->
    {ok, Ref} = timer:send_interval(1000, timeout),
    {cowboy_websocket, Req, #state{ref = Ref}}.


websocket_handle(_Data, Req, State) ->
    {ok, Req, State}.


websocket_info(timeout, Req, #state{count = Count} = State) ->
    RawJson = jsone:encode(#{count => Count, uuid => uuidv4()}),
    {reply, {text, RawJson}, Req, State#state{count = Count + 1}};
websocket_info(_Info, Req, State) ->
    {ok, Req, State}.



uuidv4() ->
    list_to_binary(uuid:uuid_to_string(uuid:get_v4())).
