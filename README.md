# Melbourne Housing Market Analysis

This project analyzes 27,244 Melbourne property sales from 2016-2018 to uncover price trends, regional disparities, and value opportunities. The analysis reveals a 3.2x price gap between premium Southern Metropolitan ($1.4M average) and budget-friendly Western Victoria ($433K average), with room count showing stronger price correlation than CBD distance. An interactive React dashboard visualizes key findings including regional price comparisons, value metrics, and market trends.

**Live Demo**: [https://raymond-520.github.io/melbourne-property-analysis/](https://raymond-520.github.io/melbourne-property-analysis/)

**Dataset Source**: [Melbourne Housing Market by anthonypino on Kaggle](https://www.kaggle.com/datasets/anthonypino/melbourne-housing-market)

## Key Findings

- **Market cooling trend**: Property prices declined 4.3% from 2016 ($1.06M average) to 2018 ($1.02M average)
- **Regional price disparities**: Southern Metropolitan commands 3.2x premium over Western Victoria ($1.4M vs $433K)
- **Room count matters more than location**: Moderate positive correlation with price (0.47) vs weak negative correlation with CBD distance (-0.21)
- **Best value regions**: Western Victoria, Northern Victoria, and Eastern Victoria offer 50-70% lower price-per-room costs ($136K-$207K per room) compared to metropolitan areas ($280K-$471K per room)
- **Premium suburbs**: Canterbury tops the list at $2.4M average, while Darley offers entry at $380K

## Tech Stack

**Analysis**: Python, pandas, matplotlib, seaborn, Jupyter Notebook

**Frontend**: React, Vite, Tailwind CSS v4, Recharts, Framer Motion

## Project Structure

```
melbourne-property-analysis/
├── notebooks/               # Jupyter notebooks for analysis
│   ├── 01_initial_exploration.ipynb
│   ├── 02_data_cleaning.ipynb
│   └── 03_exploratory_analysis.ipynb
├── data/                    # Raw and cleaned datasets
├── outputs/                 # Generated charts and visualizations
├── frontend/                # React dashboard application
│   ├── src/                 # React components and app logic
│   └── public/              # Static assets
├── FINDINGS.md              # Detailed analysis findings and recommendations
└── README.md                # Project documentation (this file)
```

## How to Run

### Analysis Notebooks

1. **Set up Python environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install pandas matplotlib seaborn jupyter
   ```

2. **Download the dataset**:
   - Get the Melbourne Housing Market dataset from [Kaggle](https://www.kaggle.com/datasets/anthonypino/melbourne-housing-market)
   - Place `Melbourne_housing_FULL.csv` in the `data/` directory

3. **Run Jupyter notebooks**:
   ```bash
   jupyter notebook
   ```
   - Start with `01_initial_exploration.ipynb` for data overview
   - Run `02_data_cleaning.ipynb` to clean the dataset
   - Explore findings in `03_exploratory_analysis.ipynb`

### Frontend Dashboard

1. **Install dependencies**:
   ```bash
   cd frontend
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   - Open [http://localhost:5173](http://localhost:5173) in your browser

3. **Build for production**:
   ```bash
   npm run build
   npm run preview  # Preview production build locally
   ```

## Methodology & Limitations

### Data Cleaning Process
- Started with 34,857 property records
- Removed 7,610 rows with missing Price values (core analysis variable)
- Dropped BuildingArea and YearBuilt columns due to high null rates
- Imputed missing Car, Bathroom, Bedroom2 values using column medians
- Removed rows missing critical location data (Distance, Postcode, CouncilArea, etc.)
- **Final dataset**: 27,244 properties with 19 features

### Known Limitations
- **Landsize data**: 34% missing values (9,262 nulls) - excluded from analysis
- **Geographic coordinates**: 23% missing Latitude/Longitude (6,251 properties) - limits spatial mapping
- **Time period**: Dataset covers 2016-2018 only; current market conditions may differ
- **Property type aggregation**: Houses, units, and townhouses analyzed together - type-specific insights not separated

### Analysis Methods
- **Price-per-room metric**: Property Price ÷ Number of Rooms
- **Regional averages**: Computed across all properties in each region
- **Correlation analysis**: Pearson correlation coefficient
- All monetary values in Australian Dollars (AUD)

---

**Full Analysis**: See [FINDINGS.md](./FINDINGS.md) for detailed findings, recommendations, and buyer insights.
