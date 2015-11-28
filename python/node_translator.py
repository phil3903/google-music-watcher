import sys
import json


class Translator:

    def __init__(self):
        pass

    @staticmethod
    def get_input():

        inputs = []
        for line in sys.stdin:
            inputs = json.loads(line)
        return inputs
