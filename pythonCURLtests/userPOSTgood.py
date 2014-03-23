import urllib
import urllib2

url = "http://localhost:3000/user"
data = '{"firstName" : "Christopher", "lastName" : "Layton", "username" : "cwl97045", "password" : "facebook", "age" : 20, "sex" : "male", "location" : "Oregon City"}'
head = {'Content-Type' : 'application/json'}
req = urllib2.Request(url, data, head)
response = urllib2.urlopen(req)
page = response.read()
print page
