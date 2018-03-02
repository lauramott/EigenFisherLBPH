import os.path
from datasetGenerator import *
from train import *
from detector import *
if __name__ == '__main__':

    while True:
            request = input("Type [1] for saving a new face, [2] for scanning a face")
            if request == '1':
                DatasetGenerator().main()
                Train().main()
            elif request == '2':
                Detector().main()
