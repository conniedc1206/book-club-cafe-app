class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :date
  has_one :book_club
end
