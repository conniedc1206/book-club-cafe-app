class BookClubSerializer < ActiveModel::Serializer
  attributes :id, :club_name, :title, :author, :image, :desc, :genre, :url, :reading_level, :events
end
