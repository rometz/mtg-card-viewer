class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.integer :multiverseid
      t.string :url
      t.integer :deck_id, array: true
  end
end
