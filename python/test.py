import sys
import json

for line in sys.stdin:
  n = json.loads(line)
  print json.dumps(n['a'])

