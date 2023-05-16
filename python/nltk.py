# might need to install GPU stuff
from spacytextblob.spacytextblob import SpacyTextBlob
import spacy
nlp = spacy.load("en_core_web_sm")

print(spacy.__version__)
nlp.components
nlp.component_names

# adding it to pipeline
nlp.add_pipe("spacytextblob")

# recheck our pipeline
# print(nlp.components)

mytext = "Stupid stupid"
docx = nlp(mytext)

# check polarity
print(docx._.polarity)

# check for subjectivity
print(docx._.subjectivity)

# check bot
print(docx._.assessments)
