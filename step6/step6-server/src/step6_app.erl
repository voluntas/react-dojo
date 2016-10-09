-module(step6_app).

-behaviour(application).

-export([start/2, stop/1]).


start(_StartType, _StartArgs) ->
    Dispatch = cowboy_router:compile([
                                      {'_', [
                                             {"/ws", ws_handler, []}
                                            ]}
                                     ]),
    {ok, _} = cowboy:start_http(step6, 1, [{port, 8080}], [{env, [{dispatch, Dispatch}]}]),
    step6_sup:start_link().


stop(_State) ->
    ok.
