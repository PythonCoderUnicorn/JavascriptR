
# ============== Javascript for R

# data visualizations htmlwidgets
# js with shiny
# js and Node.js
# js and frameworks



# install.packages("rmapshaper")
# install.packages("plotly")

# library(plotly)
# plot_ly(diamonds, x = ~cut, color = ~clarity, width = "100%")


# install.packages("waiter")


library(shiny)
library(waiter)

# ui <- fluidPage(
#   use_waiter(), # include dependencies
#   actionButton("show", "Show loading for 3 seconds")
# )
# 
# server <- function(input, output, session){
#   # create a waiter
#   w <- Waiter$new()
#   
#   # on button click
#   observeEvent(input$show, {
#     w$show()
#     Sys.sleep(3)
#     w$hide()
#   })
# }
# 
# shinyApp(ui, server)

# ================ RUN JAVASCRIPT IN R !
library(V8)

ctx = v8()
ctx$eval("2 *7")




# reactable::reactable(iris[1:5, ], showPagination = TRUE)

# devtools::install_github("rstudio/r2d3")




library(jsonlite)

lst <- list(
  a = 1,
  b = list(
    c = c("A", "B")
  ),
  d = 1:5
)

toJSON(lst, pretty = TRUE)


df = cars[1:2, ]
toJSON(df, pretty = T)

