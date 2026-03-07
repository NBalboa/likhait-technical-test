class Expense < ApplicationRecord
  belongs_to :category

  validates :amount, presence: true, numericality: { greater_than: 0 }
  validates :description, presence: true
  validates :category_id, presence: true
  validates :date, presence: true, comparison: { less_than_or_equal_to: Date.today }
end
