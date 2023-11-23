function pascal (words) {
    console.log(words.split(/(?=[A-Z])/).join(", "))
}

pascal('SplitMeIfYouCanHaHaYouCantOrYouCan')