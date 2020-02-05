class Deck < ApplicationRecord
    has_many :deck_items
    has_many :cards, through: :deck_items
end