
# app.R 

library(shiny)

# #  serve files
# addResourcePath(
#   # will be accessible at /files
#   prefix = "files",
#   # path to assets directory
#   directoryPath = "assets"
# )
# 
# ui <- fluidPage(
#   h1("R and Javascript")
# )
# 
# 
# server <- function(input, output){}
# 
# shinyApp(ui, server)



ui <- fluidPage(
  singleton(
    tags$head( 
      tags$script(src='sketch.js')
      ),
    h1("R + javascript")
  ),
  p(id='content', 'shiny javascript !')
)

server <- function(input, output){}

shinyApp(ui, server)














