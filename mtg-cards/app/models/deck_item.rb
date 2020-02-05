class DeckItem < ApplicationRecord
  belongs_to :deck
  belongs_to :card
end
