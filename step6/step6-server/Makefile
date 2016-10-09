.PHONY: all upgrade compile dev clean distclean

all: upgrade dev

upgrade:
	@./rebar3 upgrade

compile:
	@./rebar3 xref

dev: compile
	@./rebar3 as dev release
	./_build/dev/rel/step6/bin/step6

clean:
	@./rebar3 clean

distclean: clean
	@./rebar3 clean --all
