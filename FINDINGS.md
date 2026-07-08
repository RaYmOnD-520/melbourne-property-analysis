# Melbourne Housing Market Analysis - Key Findings

## Executive Summary

Analysis of 27,244 Melbourne property sales (2016-2018) reveals significant price disparities across regions, with Southern Metropolitan commanding premium prices ($1.4M average) while Western Victoria offers exceptional value at $433K average. Properties closer to the CBD correlate with higher prices, though the relationship is moderate (-0.21 correlation with distance), while room count shows stronger positive correlation with price (0.47), making price-per-room a critical value metric for buyers.

## Key Findings

### Price Trends Over Time (2016-2018)
- **Highest average price**: 2016 at $1,063,226.51
- **Lowest average price**: 2018 at $1,017,567.71
- Market showed a slight cooling trend over the 3-year period, with prices declining approximately 4.3%

### Regional Price Disparities
- **Most expensive region**: Southern Metropolitan ($1,395,928.33 average)
- **Least expensive region**: Western Victoria ($432,606.77 average)
- **Price gap**: 3.2x difference between most and least expensive regions
- **Most expensive suburb overall**: Canterbury ($2,386,270.59 average)
- **Least expensive suburb overall**: Darley ($380,000.00 average)

### Property Feature Correlations
- **Price vs Rooms**: Moderate positive correlation (0.4652)
  - More rooms generally command higher prices
  - Each additional room adds significant value
- **Price vs Distance to CBD**: Weak negative correlation (-0.2114)
  - Properties closer to CBD tend to be more expensive
  - However, distance alone is not the dominant price factor

### Price-Per-Room Value Analysis (Best Value Regions)

**Top 3 regions offering the most space for your money:**

1. **Western Victoria** 🏆
   - Average Price: $432,606.77
   - Average Distance to CBD: 30.8 km
   - **Price per Room: $135,704.43** (best value)
   
2. **Northern Victoria**
   - Average Price: $619,051.20
   - Average Distance to CBD: 33.1 km
   - **Price per Room: $184,200.05**
   
3. **Eastern Victoria**
   - Average Price: $714,328.20
   - Average Distance to CBD: 34.3 km
   - **Price per Room: $207,284.91**

**For comparison - Premium regions:**
- **Southern Metropolitan**: $470,600.20 per room (3.5x more expensive than Western Victoria)
- **Eastern Metropolitan**: $334,733.89 per room (2.5x more expensive than Western Victoria)

## Recommendations for Home Buyers

### Best Value for Money
If maximizing space per dollar is your priority, **Western Victoria, Northern Victoria, and Eastern Victoria** offer the best value, with price-per-room costs 50-70% lower than metropolitan areas. These regions provide:
- Significantly more room/space for the same budget
- Family-friendly larger homes at accessible price points
- Trade-off: 30-34 km average distance from CBD

### Balanced Approach
For buyers seeking proximity to CBD while managing costs:
- **South-Eastern Metropolitan** offers reasonable value ($275,983.23 per room) with better CBD access (24.3 km average)
- **Western Metropolitan** provides strong CBD proximity (10.9 km) at $279,632.69 per room
- Both regions offer 40-50% savings per room compared to Southern/Eastern Metropolitan premium zones

### Premium Location Investment
Buyers prioritizing prestige locations and CBD proximity should focus on:
- **Southern Metropolitan**: Closest to CBD (9.0 km average), highest prices, premium suburbs like Canterbury
- Expect to pay $470,600 per room - the highest in Melbourne
- Trade-off: 3.5x higher cost per room than value regions

### Key Buyer Insight
The data shows that **distance to CBD is only weakly correlated with price (-0.21)**, meaning you can find good value properties at various distances. Instead, **focus on price-per-room** as your primary value metric - it reveals where you'll get the most space for your investment, regardless of specific distance to CBD.

## Data & Methodology

### Dataset Source
- **Dataset**: Melbourne Housing Market by anthonypino on Kaggle
- **Original records**: 34,857 property sales
- **Analysis period**: 2016-2018

### Data Cleaning Steps
1. Removed 7,610 rows with missing Price values (core analysis variable)
2. Dropped BuildingArea and YearBuilt columns (high null rates, not critical for value analysis)
3. Imputed missing values for Car, Bathroom, Bedroom2 using column medians
4. Removed rows missing critical location data: Distance, Postcode, CouncilArea, Regionname, Propertycount
5. **Final cleaned dataset**: 27,244 properties with 19 features

### Known Limitations
- **Landsize**: 9,262 null values (34% of dataset) - landsize analysis not included
- **Geographic coordinates**: Lattitude/Longtitude missing for 6,251 properties (23%) - spatial mapping limited
- **Time period**: Data limited to 2016-2018; market conditions may have changed since
- **Property types**: Analysis includes houses (h), units (u), and townhouses (t) - type-specific value metrics not separated in this report

### Analysis Methods
- Price-per-room calculated as: Property Price ÷ Number of Rooms
- Regional averages computed across all properties in each region
- Correlation analysis using Pearson correlation coefficient
- All monetary values in Australian Dollars (AUD)

---

**Analysis Date**: July 2026  
**Analysts**: Data analysis performed using Python (pandas, matplotlib, seaborn)
