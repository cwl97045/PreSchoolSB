import urllib
import urllib2

url = "http://localhost:3000"
req = urllib2.Request(url)
response = urllib2.urlopen(req)
data = response.read()
print data
