class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :book_club, :attendances
end
