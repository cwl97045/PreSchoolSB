import urllib
import urllib2

url = "http://localhost:3000/login"
data = '{"username" : "cwl97045", "password" :"facebook"}'
head = {'Content-Type' : 'application/json'}
req = urllib2.Request(url, data, head)
response = urllib2.urlopen(req)
page = response.read()
print page
	
