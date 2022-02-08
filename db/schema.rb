# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_10_09_144835) do

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.integer "record_id", null: false
    t.integer "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "badge_templates", force: :cascade do |t|
    t.string "name"
    t.boolean "allow_duplicates"
    t.string "description"
    t.string "state"
    t.boolean "public"
    t.string "vanity_slug"
    t.string "image_url"
    t.string "badge_url"
    t.integer "deployed"
    t.string "organization_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "heroes", force: :cascade do |t|
    t.string "recipient_email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "badge_template_id", null: false
    t.datetime "issued_at", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "kv_group_evidences", force: :cascade do |t|
    t.string "hero_id", null: false
    t.string "name", null: false
  end

  create_table "kv_pair_evidences", force: :cascade do |t|
    t.string "kv_group_evidence_id", null: false
    t.string "key", null: false
    t.string "value", null: false
    t.string "url"
  end

  create_table "organizations", force: :cascade do |t|
    t.string "name"
    t.string "image_url"
    t.string "vanity_url"
    t.string "vanity_slug"
    t.boolean "verified"
    t.boolean "viewable"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "plain_text_evidences", force: :cascade do |t|
    t.string "hero_id", null: false
    t.string "title", null: false
    t.string "description"
  end

  create_table "url_evidences", force: :cascade do |t|
    t.string "hero_id", null: false
    t.string "name", null: false
    t.string "value", null: false
    t.string "description"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
