class Category < ApplicationRecord
  has_many :expenses, dependent: :destroy

  validates :name, presence: true, uniqueness: { message: "of category is already taken", case_sensitive: false }
end
