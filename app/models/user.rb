class User < ApplicationRecord
    has_many :memberships
    has_many :book_clubs, through: :memberships
    
    # validations
    has_secure_password
    validates :email, presence: true, uniqueness: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'Invalid email' }
end
