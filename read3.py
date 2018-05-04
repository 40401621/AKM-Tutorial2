import urllib2,json,base64
accesstoken = "8LKVQA2HRQYX09TYQDUN"
institution = "10007772"
course = "U56119"
page = 0
url = "http://data.unistats.ac.uk/api/v4/KIS/Institution/{}/Course/{}/FullTime/Statistics.json".format(institution,
	course
	)
request = urllib2.Request(url)
request.add_header(
	"Authorization",
	"Basic " + base64.encodestring(accesstoken+":").replace('\n','')
	)
response = urllib2.urlopen(request)
data = json.load(response)
print json.dumps(data,indent=2)	
for c in data:
	if c['Code'] == "SALARY":
		d = c['Details']
		for k in d:
			if k['Code'] == "MED":
				print(k['Value']) 
for c in data:
	if c['Code'] == "SALARY":
		d = c['Details']
		for k in d:
			if k['Code'] == "LDMED":
				print(k['Value'])
for c in data:
	if c['Code'] == "NSS":
		d = c['Details']
		for k in d:
			if k['Code'] == "Q1":
				print(k['Value'])