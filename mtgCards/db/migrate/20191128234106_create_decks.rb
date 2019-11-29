class CreateDecks < ActiveRecord::Migration[6.0]
  def change
    create_table :decks do |t|
      t.string :name, default: 'unnamed'
      t.integer :size, default: 0
    end
  end
end
