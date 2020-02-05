# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_05_233502) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cards", force: :cascade do |t|
    t.string "name"
    t.integer "multiverseid"
    t.string "url"
    t.integer "deck_id", array: true
  end

  create_table "deck_items", force: :cascade do |t|
    t.bigint "deck_id", null: false
    t.bigint "card_id", null: false
    t.text "description"
    t.integer "number"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["card_id"], name: "index_deck_items_on_card_id"
    t.index ["deck_id"], name: "index_deck_items_on_deck_id"
  end

  create_table "decks", force: :cascade do |t|
    t.string "name", default: "unnamed"
    t.integer "size", default: 0
  end

  add_foreign_key "deck_items", "cards"
  add_foreign_key "deck_items", "decks"
end
