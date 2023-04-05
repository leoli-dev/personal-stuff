package main

func main() {
	cards := newDeck()
	cards.shuffle()
	cards.saveToFile("my_cards")

	// cards := newDeck()
	// cards.shuffle()
	// cards.print()
}
