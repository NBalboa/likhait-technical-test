class Expense < ApplicationRecord
  belongs_to :category

  validates :amount, presence: true, numericality: { greater_than: 0 }
  validates :description, presence: true
  validates :category_id, presence: true
  validates :date, presence: true
  validate :no_future_date

  private
  def no_future_date
    if date > Date.today
      errros.add(:date, "Date must not be in the future")
    end
  end
end
