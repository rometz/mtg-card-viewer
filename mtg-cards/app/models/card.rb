class Card < ApplicationRecord
    has_many :deck_items
    has_many :decks, through: :deck_items
end