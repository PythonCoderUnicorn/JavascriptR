
#' Strings Length
#'
#' Returns the number of characters in strings.
#'
#' @param strings A vector of character strings.
#'
#' @example string_length(c("hello", "world"))
#'
#' @export
string_length <- function(strings){
  stringr::str_length(strings)
}
