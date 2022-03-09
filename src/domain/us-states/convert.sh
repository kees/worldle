#!/bin/bash

echo 'export const countryCodesWithImage = [' > image.ts
while read code lat long name ; do
	echo $code | tr A-Z a-z | awk '{print "  \"" $1 "\","}' >>image.ts
done < states.csv
echo '];' >>image.ts

echo 'import { Country } from "./shape";' > position.ts
echo 'export const countries: Country[] = [' >>position.ts
#  { code: "AD", latitude: 42.546245, longitude: 1.601554, name: "Andorra" },
while read code lat long name ; do
	echo "  { code: \"$code\", latitude: $lat, longitude: $long, name: \"$name\" }," >>position.ts
done < states.csv
echo '];' >>position.ts

exit 0
