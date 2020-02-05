class CreateDeckItems < ActiveRecord::Migration[6.0]
  def change
    create_table :deck_items do |t|
      t.references :deck, null: false, foreign_key: true
      t.references :card, null: false, foreign_key: true
      t.text :description
      t.integer :number

      t.timestamps
    end
  end
end
