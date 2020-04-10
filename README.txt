## Getting all Logos

{
  logos{
    _id
  	text
    color
    fontSize
    backgroundColor
    borderColor
    borderRadius
    borderWidth
    padding
    margin
    lastUpdate
  }
}

## Getting a Logo by id

{
  logo(id: "5e8792d0509de6d4678f3603"){
    _id
  	text
    color
    fontSize
    backgroundColor
    borderColor
    borderRadius
    borderWidth
    padding
    margin
    lastUpdate
  }
}

## Adding a Logo

mutation AddLogo {
  addLogo(text: "WWW", color: "#1f3eff", fontSize: 50, backgroundColor: "#6BFF33", 
  borderRadius: 10, borderColor: "#AB33FF", borderWidth: 20, padding: 20, margin: 20) {
    text
    color
    fontSize
    backgroundColor
    borderRadius
    borderColor
    borderWidth
    padding
    margin
  }
} 

## Update a Logo

mutation updateLogo {
  updateLogo(id: "5e8792d0509de6d4678f3603", text: "W4", color: "#DACC2F ", 
  fontSize: 60, backgroundColor: "#43885D", borderRadius: 10, 
  borderColor: "#AB33FF", borderWidth: 20, padding: 20, margin: 20) {
    _id
    text
    color
    fontSize
    backgroundColor
    borderRadius
    borderColor
    borderWidth
    padding
    margin
  }
}

## Remove a Logo

mutation removeLogo {
  removeLogo(id: "5e87ce74509de6d4678f3606") {
    _id
  }
}



