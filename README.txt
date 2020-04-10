## Querying all Logos

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

## Querying a Logo by id

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
  addLogo (text: "WWW",
          color: "#1f3eff",
          fontSize: 50,
          backgroundColor: "#6BFF33",
          borderRadius: 10,
          borderColor: "#AB33FF",
          borderWidth: 20,
          padding: 20,
          margin: 20) {
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

