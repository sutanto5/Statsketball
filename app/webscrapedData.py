import re
import requests
from bs4 import BeautifulSoup


req = requests.get("https://www.basketball-reference.com/leagues/NBA_2023_per_poss.html")

soup = BeautifulSoup(req.content, "html.parser")
print('yes')

results = soup.find(id="all_per_poss_stats")

thePlayers = []
playerName = []
playerPosition = []
ptsByPlayer = []
threePointAttemptsByPlayer = []
threePointPercentageByPlayer = []
freeThrowPercentageByPlayer = []
playerTeam = []

for player in results.find_all('tr', class_='full_table'):
    newPlayer = player.text
    thePlayers.append(newPlayer)

for player in thePlayers:
    name = re.split('(\d+)',player)
    if(name[2][-1] == 'C'):
        playerName.append(name[2][:-1])
        playerPosition.append(name[2][-1])
    else:
        playerName.append(name[2][:-2])
        secondToLastLetter = name[2][-2]
        lastLetter = name[2][-1]
        playerPosition.append(secondToLastLetter + lastLetter)
        
for player in thePlayers:
    name = re.split('(\d+)',player)
    playerTeam.append(name[4])     



for player in thePlayers:
    pts = re.split('(\d+)',player)
    lastItem = pts[-2]
    decimal = lastItem[0]
    secondToLastItem = pts[-4]
    wholeNumberValue = secondToLastItem[1:]
    finalValue = wholeNumberValue + '.' + decimal
    ptsByPlayer.append(finalValue)


for player in thePlayers:
    tpa = re.split('(\d+)',player) 
    wholeNumber = tpa[13]
    wholeNumberValue = wholeNumber[:1]
    decimal = tpa[15]
    decimalValue = decimal[0]
    threePointAttemptsByPlayer.append(wholeNumberValue + '.' + decimalValue)

for player in thePlayers:
    tpp = re.split('(\d+)',player)
    number = tpp[17]
    if(len(number) < 3):
        threePointPercentageByPlayer.append('00.0')
    else:
        threePointPercentageByPlayer.append(number[0] + number[1] + '.' + number[2])
    

    
for player in thePlayers:
    ftp = re.split('(\d+)',player)
    number = ftp[29]
    if(len(number) < 3):
        freeThrowPercentageByPlayer.append('50.0')
    else:
        freeThrowPercentageByPlayer.append(number[0] + number[1] + '.' + number[2])    


    
advancedReq = requests.get("https://www.basketball-reference.com/leagues/NBA_2023_advanced.html")

advancedSoup = BeautifulSoup(advancedReq.content, "html.parser")
print('yes')

advancedResults = advancedSoup.find(id="all_advanced_stats") 

theAdvancedPlayers = []
trueShootingPercentageByPlayer = []
assistPercentageByPlayer = []
stealPercentageByPlayer = []
blockPercentageByPlayer = []
turnoverPercentageByPlayer = []
defensiveWinSharesByPlayer = []
gamesPlayedByPlayer = []

for player in advancedResults.find_all('tr', class_='full_table'):
    newPlayer = player.text
    theAdvancedPlayers.append(newPlayer)

for player in theAdvancedPlayers:
    tsp = re.split('(\d+)',player)
    wholeNumber = tsp[9]
    if(len(wholeNumber) < 3):
        trueShootingPercentageByPlayer.append('00.0')
    else:
        trueShootingPercentageByPlayer.append(wholeNumber[0] + wholeNumber[1] + '.' + wholeNumber[2])

for player in theAdvancedPlayers:
    ap = re.split('(\d+)',player)
    number = ap[19]
    wholeNumber = number[1:]
    decimal = ap[21]
    decimalValue = decimal[0]
    assistPercentageByPlayer.append(wholeNumber + '.' + decimalValue)
    

for player in theAdvancedPlayers:
    sp = re.split('(\d+)',player)
    number = sp[21]
    wholeNumber = number[1:]
    decimal = sp[23]
    decimalValue = decimal[0]
    stealPercentageByPlayer.append(wholeNumber + '.' + decimalValue)

for player in theAdvancedPlayers:
    bp = re.split('(\d+)',player)
    number = bp[23]
    wholeNumber = number[1:]
    decimal = bp[25]
    decimalValue = decimal[0]
    blockPercentageByPlayer.append(wholeNumber + '.' + decimalValue)

for player in theAdvancedPlayers:
    tp = re.split('(\d+)',player)
    number = tp[25]
    wholeNumber = number[1:]
    decimal = tp[27]
    decimalValue = decimal[0]
    turnoverPercentageByPlayer.append(wholeNumber + '.' + decimalValue)
    
for player in theAdvancedPlayers:
    dws = re.split('(\d+)',player)
    number = dws[31]
    wholeNumber = number[1:]
    decimal = dws[33]
    decimalValue = decimal[0]
    defensiveWinSharesByPlayer.append(wholeNumber + '.' + decimalValue)

for player in theAdvancedPlayers:
    gp = re.split('(\d+)', player)
    number = gp[5]
    if(len(number) < 7):
        games = 0
    else:
        games = number[0:2]        
    gamesPlayedByPlayer.append(games)

allScoringValues = []
i = 0

for player in thePlayers:
    ptsByPlayer[i] = float(ptsByPlayer[i])
    trueShootingPercentageByPlayer[i] = float(trueShootingPercentageByPlayer[i])
    gamesPlayedByPlayer[i] = int(gamesPlayedByPlayer[i])
    if gamesPlayedByPlayer[i] == 0:
        scoringValue = 0
    else:
        scoringValue = (ptsByPlayer[i] * (trueShootingPercentageByPlayer[i] - 58.1 + 20)) / 150
    allScoringValues.append(scoringValue)
    i = i + 1


allPlaymakingValues = []
i = 0
for player in thePlayers:
    ptsByPlayer[i] = float(ptsByPlayer[i])
    trueShootingPercentageByPlayer[i] = float(trueShootingPercentageByPlayer[i])
    assistPercentageByPlayer[i] = float(assistPercentageByPlayer[i])
    turnoverPercentageByPlayer[i] = float(turnoverPercentageByPlayer[i])
    gamesPlayedByPlayer[i] = int(gamesPlayedByPlayer[i])
    if gamesPlayedByPlayer[i] == 0:
        playmakingValue = 0
    else:
        playmakingValue = (((ptsByPlayer[i] * (trueShootingPercentageByPlayer[i] - 58.1 + 20) / 150) + ptsByPlayer[i]) / 10) / 10 * assistPercentageByPlayer[i] - (turnoverPercentageByPlayer[i] / 15)
    allPlaymakingValues.append(playmakingValue)
    i = i + 1
    
allScalabilityValues = []
i = 0    
for player in thePlayers:
    threePointAttemptsByPlayer[i] = float(threePointAttemptsByPlayer[i])
    threePointPercentageByPlayer[i] = float(threePointPercentageByPlayer[i])
    freeThrowPercentageByPlayer[i] = float(freeThrowPercentageByPlayer[i])
    assistPercentageByPlayer[i] = float(assistPercentageByPlayer[i])
    if(gamesPlayedByPlayer[i] == 0):
        scalabilityValue = 0
    else: 
        scalabilityValue = ((threePointAttemptsByPlayer[i] * threePointPercentageByPlayer[i] + freeThrowPercentageByPlayer[i] * 3) * 3) + ((trueShootingPercentageByPlayer[i] - 58.1 + 20) * 3) * ((assistPercentageByPlayer[i] * 2) / ptsByPlayer[i]) * 10 - ptsByPlayer[i] ** 2 / 1.5   
    allScalabilityValues.append(scalabilityValue)
    i = i + 1

allDefensiveValues = []
i = 0
for player in thePlayers:
    stealPercentageByPlayer[i] = float(stealPercentageByPlayer[i])
    blockPercentageByPlayer[i] = float(blockPercentageByPlayer[i])
    defensiveWinSharesByPlayer[i] = float(defensiveWinSharesByPlayer[i])
    if(gamesPlayedByPlayer[i] == 0):
        defensiveValue = 0
    else: 
        defensiveValue = defensiveWinSharesByPlayer[i] + stealPercentageByPlayer[i] / 2 + blockPercentageByPlayer[i] / 3     
    allDefensiveValues.append(defensiveValue)
    i = i + 1   

allTotalValues = []
i = 0
for player in thePlayers:
    allDefensiveValues[i] = float(allDefensiveValues[i])
    allScoringValues[i] = float(allScoringValues[i])
    allPlaymakingValues[i] = float(allPlaymakingValues[i])
    allScalabilityValues[i] = float(allScalabilityValues[i])
    totalValue = allScoringValues[i] + allPlaymakingValues[i] / 2 + allScalabilityValues[i] / 1000 + allDefensiveValues[i] 
    allTotalValues.append(totalValue)   
    i = i + 1 

class Player:
    def __init__(self, name, position, team, gamesPlayed, scoringValue, playmakingValue, scalabilityValue, defensiveValue, totalValue, freeThrowPercentageByPlayer,blockPercentageByPlayer,stealPercentageByPlayer,assistPercentageByPlayer,turnoverPercentageByPlayer,threePointPercentageByPlayer,trueShootingPercentageByPlayer,threePointAttemptsByPlayer,defensiveWinSharesByPlayer):
        self.name = name
        self.position = position
        self.team = team
        self.gamesPlayed = gamesPlayed
        self.scoringValue = scoringValue
        self.playmakingValue = playmakingValue
        self.scalabilityValue = scalabilityValue
        self.defensiveValue = defensiveValue
        self.totalValue = totalValue
        self.freeThrowPercentageByPlayer = freeThrowPercentageByPlayer
        self.blockPercentageByPlayer = blockPercentageByPlayer
        self.stealPercentageByPlayer = stealPercentageByPlayer
        self.assistPercentageByPlayer = assistPercentageByPlayer
        self.turnoverPercentageByPlayer = turnoverPercentageByPlayer
        self.threePointPercentageByPlayer = threePointPercentageByPlayer
        self.trueShootingPercentageByPlayer = trueShootingPercentageByPlayer
        self.threePointAttemptsByPlayer = threePointAttemptsByPlayer
        self.defensiveWinSharesByPlayer = defensiveWinSharesByPlayer

allPlayers = []
i = 0        
for player in thePlayers:
    newPlayer = Player(playerName[i], playerPosition[i], playerTeam[i], gamesPlayedByPlayer[i], allScoringValues[i], allPlaymakingValues[i], allScalabilityValues[i], allDefensiveValues[i], allTotalValues[i],freeThrowPercentageByPlayer[i],blockPercentageByPlayer[i],stealPercentageByPlayer[i],assistPercentageByPlayer[i],turnoverPercentageByPlayer[i],threePointPercentageByPlayer[i],trueShootingPercentageByPlayer[i],threePointAttemptsByPlayer[i],defensiveWinSharesByPlayer[i])
    allPlayers.append(newPlayer)
    i = i + 1


import json


def write_json(data, filename="app/webscrapedData.json"):
    with open(filename, "w") as f:
        json.dump(data, f, indent=4)


with open ("app/webscrapedData.json") as json_file:
    data = json.load(json_file)
    temp = data["data"]
    for player in allPlayers:
        y = {"name": player.name, "position": player.position, "team": player.team, "gamesPlayed": player.gamesPlayed, "scoringValue": player.scoringValue, "playmakingValue": player.playmakingValue, "scalabilityValue": player.scalabilityValue, "defensiveValue": player.defensiveValue, "totalValue": player.totalValue,"freeThrowP": freeThrowPercentageByPlayer,"blockP": blockPercentageByPlayer,"stealP": stealPercentageByPlayer,"assistP": assistPercentageByPlayer,"turnoverP": turnoverPercentageByPlayer,"threePointP": threePointPercentageByPlayer,"trueShootingP": trueShootingPercentageByPlayer,"threePointA": threePointAttemptsByPlayer,"dws": defensiveWinSharesByPlayer}
        temp.append(y)
write_json(data)    