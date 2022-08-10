class CreateBookClubs < ActiveRecord::Migration[6.1]
  def change
    create_table :book_clubs do |t|
      t.string :club_name
      t.string :title
      t.string :author
      t.string :image
      t.string :desc
      t.string :genre
      t.string :url
      t.string :reading_level

      t.timestamps
    end
  end
end
