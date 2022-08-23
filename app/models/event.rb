class Event < ApplicationRecord
  belongs_to :book_club
  has_many :attendances
  has_many :users, through: :attendances
end
