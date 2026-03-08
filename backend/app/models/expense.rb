class Expense < ApplicationRecord
  belongs_to :category

  validates :amount, presence: true, numericality: { greater_than: 0 }
  validates :description, presence: true
  validates :category_id, presence: true
  validates :date, presence: true
  validate :no_future_date

  private
  def no_future_date
    if date && date > Date.today
      errors.add(:date, :future)
    end
  end
end
