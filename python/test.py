import sys
import json
from node_translator import Translator

translator = Translator
node_input = translator.get_input()

for item in node_input:
    print json.dumps(item)

