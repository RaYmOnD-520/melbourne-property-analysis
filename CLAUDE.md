# Melbourne Housing Market Analysis - Development Context

## Project Purpose

Analysis of Melbourne property sales (2016-2018) to identify price trends, regional disparities, and value opportunities for home buyers. Includes interactive React dashboard for visualizing findings.

## Current Status

**Complete** - Analysis finished, dashboard deployed to GitHub Pages

## Tech Stack

**Analysis**
- **Python + pandas**: Data cleaning and transformation (27K records)
- **matplotlib + seaborn**: Statistical visualizations (correlation heatmaps, scatter plots)
- **Jupyter Notebook**: Interactive analysis workflow and documentation

**Frontend**
- **React 19 + Vite 8**: Modern dev experience, fast HMR
- **Tailwind CSS v4**: Utility-first styling with new CSS-first architecture
- **Recharts 3**: Declarative charting library, React-native API
- **Framer Motion**: Smooth animations for data transitions
- **gh-pages**: Zero-config GitHub Pages deployment

## Key File Locations

```
notebooks/
  01_initial_exploration.ipynb    # Data overview, null analysis
  02_data_cleaning.ipynb          # Cleaning logic (34,857 → 27,244 records)
  03_exploratory_analysis.ipynb   # Price trends, correlations, visualizations

data/
  Melbourne_housing_FULL.csv      # Original dataset (Kaggle)
  Melbourne_housing_CLEAN.csv     # Cleaned dataset (27,244 rows, 19 cols)

outputs/                          # Generated PNG charts (matplotlib/seaborn)

frontend/
  src/App.jsx                     # Main dashboard layout
  src/components/                 # React components (charts, stat cards)
  src/data/                       # Cleaned data imported as JSON

FINDINGS.md                       # Buyer-focused analysis report
```

## Important Development Decisions

### Data Cleaning Choices

**Dropped columns**:
- `BuildingArea`: 16,902 nulls (50% missing) — not critical for price/room value analysis
- `YearBuilt`: 19,302 nulls (55% missing) — age correlation not primary focus

**Why Melbourne_housing_FULL over LESS**:
- FULL has 34,857 records vs LESS 13,580 (2.5x more data)
- After cleaning nulls, still retained 27,244 properties (adequate sample size)
- More robust regional/temporal patterns with larger dataset

**Imputation strategy**:
- Used median for `Car`, `Bathroom`, `Bedroom2` (low null rates, numeric features)
- Dropped rows missing `Price` (core dependent variable, no valid imputation)
- Dropped rows missing location data (`Distance`, `Regionname`, etc.) — critical for regional analysis

### Frontend Decisions

**Tailwind CSS v4 version pinning**:
- Fixed version mismatch between `tailwindcss@4.3.2` and `@tailwindcss/postcss@4.3.2`
- v4 uses new CSS-first architecture (no more `tailwind.config.js`)
- Pinned both to same version to avoid build errors (commit `020d377`)

**Data import approach**:
- Exported cleaned CSV subset as JSON for frontend consumption
- Avoids runtime CSV parsing overhead
- Only includes fields needed for visualizations (Price, Rooms, Region, Distance, Date)

**Chart library choice (Recharts over D3)**:
- Recharts: Declarative, React-native API, minimal boilerplate
- D3: More powerful but requires imperative DOM manipulation (anti-pattern in React)
- Use case fits Recharts' sweet spot: standard chart types with light customization

### Analysis Methodology

**Price-per-room as primary value metric**:
- Normalizes price across different property sizes
- More actionable than absolute price for buyers comparing regions
- Distance-to-CBD showed weak correlation (-0.21) → room count (0.47) is stronger predictor

**Regional aggregation**:
- Grouped by `Regionname` (8 regions) rather than `Suburb` (314 suburbs)
- Reduces noise, reveals macro patterns
- Suburb-level insights still included for outliers (Canterbury, Darley)

## Known Issues & Limitations

### Data Limitations
- **Landsize**: 34% missing (9,262 nulls) — excluded from analysis
- **Lat/Long**: 23% missing (6,251 nulls) — limits spatial mapping
- **Time range**: 2016-2018 only (market may have changed)
- **Property type mixing**: Houses/units/townhouses aggregated (not separated by type)

### Frontend
- No backend/API — data baked into build (static JSON)
- Charts not responsive below 640px (mobile needs work)
- No filtering/search UI yet (shows aggregate views only)

### Build Notes
- Tailwind v4 requires exact version match with PostCSS plugin
- Vite base path must match GitHub repo name for GH Pages (`/melbourne-property-analysis/`)
- `npm run deploy` builds and pushes to `gh-pages` branch automatically

## Quick Commands

### Analysis
```bash
# Setup
python -m venv venv && source venv/bin/activate
pip install pandas matplotlib seaborn jupyter

# Run notebooks
jupyter notebook
# Execute in order: 01 → 02 → 03
```

### Frontend
```bash
cd frontend

# Dev
npm install
npm run dev          # http://localhost:5173

# Deploy
npm run deploy       # Builds and pushes to gh-pages branch
```

### Linting
```bash
cd frontend
npm run lint         # oxlint (fast Rust-based linter)
```

## Dataset Source

**Kaggle**: [Melbourne Housing Market by anthonypino](https://www.kaggle.com/datasets/anthonypino/melbourne-housing-market)
- Place `Melbourne_housing_FULL.csv` in `data/` directory before running notebooks

## Live Demo

**GitHub Pages**: https://raymond-520.github.io/melbourne-property-analysis/
