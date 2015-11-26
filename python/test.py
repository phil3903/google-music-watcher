import sys
import json

node_input = []
for line in sys.stdin:
    node_input = json.loads(line)

for item in node_input:
    print json.dumps(item)

