#!/bin/sh
IFS='
'

doc='weave.html'
rm $doc

cat <<EOF > $doc
<!DOCTYPE html>
<html>
<head>
	<meta charset='utf-8'/>
	<title>Vascities</title>
	<link rel='stylesheet' href='weave.css'/>
</head>
<body>
EOF

for x in $(find literate -type f)
do
	cat $x
	echo ""
	echo ""
done | cmark --unsafe >> $doc

echo '</body></html>' >> $doc
