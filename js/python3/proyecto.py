#PYTHON 2

n = int(raw_input().strip())

if n % 2 == 0 and (n < 6 or n > 20):
    print "Not",
print "Weird"