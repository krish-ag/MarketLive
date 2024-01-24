import json

import requests

data = requests.get(
    "https://bcast.slnbullion.com/VOTSBroadcastStreaming/Services/xml/GetLiveRateByTemplateID/sln?_=0")
lst = data.text.split("\n")
json_data = {}
for i in lst:
    i = i.strip()
    if len(i) < 5:
        continue
    if i[0:3] not in ["137", "138", "139", "141", "163"]:
        continue
    name = i.split("\t")[1]
    if "($)" in name:
        name = name.replace("($)", "")
        if name not in json_data:
            json_data[name] = {"USD": i.split("\t")[2]}
        else:
            json_data[name]["USD"] = i.split("\t")[2]

    elif "INR" in name:
        json_data["USDINR"] = i.split("\t")[2]

    else:
        if "India " in name:
            name = name.replace("India ", "").strip()
        if name not in json_data:
            json_data[name] = {"INR": i.split("\t")[2]}
        else:
            json_data[name]["INR"] = i.split("\t")[2]
    # print(i.encode("utf-8"))
print(json.dumps(json_data, indent=4))
