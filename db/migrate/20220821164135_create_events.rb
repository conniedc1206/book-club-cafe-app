class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :name
      t.datetime :date
      t.belongs_to :book_club, null: false, foreign_key: true

      t.timestamps
    end
  end
end
