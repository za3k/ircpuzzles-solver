all: data/2023.json
%.json: %.yaml
	python3 -c 'import sys, yaml, json; print(json.dumps(yaml.safe_load(sys.stdin)))' < $< > $@
