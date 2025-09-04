# Comprehensive Heavy Metal Pollution Index (HMPI) System Guide

## Executive Summary

This document provides a complete guide for measuring heavy metal
pollution in groundwater using mathematical formulas and computational
methods. The system supports **60 different elements** across 5 priority
groups and integrates standards from major international organizations.

------------------------------------------------------------------------

## 1. ALL FORMULAS IMPLEMENTED

### 1.1 Heavy Metal Pollution Index (HPI)

**Formula:** HPI = Σ(Wi × Qi) / ΣWi\
**Where:** Qi = ((Mi - Ii) / (Si - Ii)) × 100

**Variables:** - Mi = Measured concentration of ith metal (mg/L) - Ii =
Ideal value (usually 0 or natural background) - Si = Standard
permissible value (regulatory limit) - Wi = Unit weight for ith metal
(based on toxicity) - n = Number of metals analyzed

**Interpretation:** - HPI \< 25: Excellent - 25 ≤ HPI \< 50: Good - 50 ≤
HPI \< 75: Poor - 75 ≤ HPI \< 100: Very Poor - HPI ≥ 100: Unsuitable

Evaluates overall water quality by weighting metal concentrations against regulatory standards, indicating suitability for use (e.g., drinking).

### 1.2 Heavy Metal Evaluation Index (HEI)

**Formula:** HEI = Σ(Hci / Hmaci)

**Variables:** - Hci = Measured concentration of ith heavy metal
(mg/L) - Hmaci = Maximum allowable concentration (regulatory limit)

**Interpretation:** - HEI \< 40: Low pollution - 40 ≤ HEI ≤ 80: Medium
pollution - HEI \> 80: High pollution

Assesses the extent of heavy metal pollution in water by comparing measured concentrations to maximum allowable limits.

### 1.3 Contamination Degree (Cd) & Modified Contamination Degree (mCd)

**Formulas:** - Cd = Σ CFi - mCd = (Σ CFi) / n - CFi = C_sample /
C_background

**Variables:** - CFi = Contamination Factor for ith pollutant - C_sample
= Measured concentration in sample - C_background = Natural background
concentration - n = Total number of pollutants

**Interpretation (mCd):** - mCd \< 1.5: Nil to very low contamination -
1.5 ≤ mCd \< 2: Low contamination - 2 ≤ mCd \< 4: Moderate
contamination - 4 ≤ mCd \< 8: High contamination - mCd ≥ 8: Very high
contamination

Measures the cumulative and average contamination levels of pollutants relative to natural background levels.

### 1.4 Pollution Load Index (PLI)

**Formula:** PLI = (CF1 × CF2 × CF3 × ... × CFn)\^(1/n)

**Variables:** - CFi = Contamination Factor = C_sample / C_background -
n = Number of metals

**Interpretation:** - PLI \< 1: No pollution - PLI ≥ 1: Pollution
present

Determines the overall pollution status of a site by combining contamination factors of multiple metals, indicating if pollution is present.

### 1.5 Metal Index (MI)

**Formula:** MI = Σ(Ci / MACi)

**Variables:** - Ci = Concentration of ith metal in sample - MACi =
Maximum Allowable Concentration for ith metal

**Interpretation:** - MI \< 0.3: Excellent water quality - 0.3 ≤ MI \<
1.0: Good water quality - 1.0 ≤ MI \< 3.0: Poor water quality - MI ≥
3.0: Unsuitable for drinking

Gauges water quality for drinking by comparing metal concentrations to allowable limits, classifying water as excellent to unsuitable.

### 1.6 Enrichment Factor (EF)

**Formula:** EF = (Ci / Cref)\_sample / (Ci / Cref)\_background

**Variables:** - Ci = Concentration of element of interest - Cref =
Concentration of reference element (usually Fe or Al)

**Interpretation:** - EF \< 2: Minimal enrichment - 2 ≤ EF \< 5:
Moderate enrichment - 5 ≤ EF \< 20: Significant enrichment - 20 ≤ EF \<
40: Very high enrichment - EF ≥ 40: Extremely high enrichment

Assesses the enrichment of a specific metal in a sample relative to a reference element, indicating natural vs. anthropogenic sources.

### 1.7 Geo-accumulation Index (Igeo)

**Formula:** Igeo = log2(Cn / (1.5 × Bn))

**Variables:** - Cn = Measured concentration in sample - Bn =
Geochemical background concentration - 1.5 = Background matrix
correction factor

**Interpretation:** - Igeo ≤ 0: Practically uncontaminated - 0 \< Igeo ≤
1: Uncontaminated to moderately contaminated - 1 \< Igeo ≤ 2: Moderately
contaminated - 2 \< Igeo ≤ 3: Moderately to heavily contaminated - 3 \<
Igeo ≤ 4: Heavily contaminated - 4 \< Igeo ≤ 5: Heavily to extremely
contaminated - Igeo \> 5: Extremely contaminated

Quantifies the degree of metal contamination in sediments or soils compared to geochemical background levels, indicating contamination severity.

------------------------------------------------------------------------

## 2. COMPREHENSIVE DATA REQUIREMENTS

### 2.1 Essential Data (Required)

**Sample Information:** - **Sample_ID**: Unique identifier for each
groundwater sample - **Location**: GPS coordinates or location
description (optional but recommended) - **Date**: Sample collection
date (optional but recommended) - **Depth**: Well depth or sampling
depth (optional)

**Heavy Metal Concentrations:** Units: mg/L (milligrams per liter) or
µg/L (micrograms per liter)

### 2.2 60-Element Framework

**Group A - Priority/Regulated Elements (10)** - Arsenic_As, Lead_Pb,
Cadmium_Cd, Chromium_Cr, Mercury_Hg - Nickel_Ni, Copper_Cu, Zinc_Zn,
Iron_Fe, Manganese_Mn

**Group B - Common/Frequently Monitored (8)** - Selenium_Se,
Aluminium_Al, Boron_B, Barium_Ba - Silver_Ag, Molybdenum_Mo,
Antimony_Sb, Tin_Sn

**Group C - Broader Trace Elements (9)** - Beryllium_Be, Strontium_Sr,
Lithium_Li, Cobalt_Co, Vanadium_V - Uranium_U, Thorium_Th, Thallium_Tl,
Bismuth_Bi

**Group D - Major Cations & Extended Lab Elements (14)** - Calcium_Ca,
Magnesium_Mg, Sodium_Na, Potassium_K - Gallium_Ga, Germanium_Ge,
Rubidium_Rb, Indium_In - Tellurium_Te, Cesium_Cs, Lanthanum_La,
Cerium_Ce - Neodymium_Nd, Samarium_Sm

**Group E - Rare/Research/ICP-MS Additions (19)** - Europium_Eu,
Gadolinium_Gd, Terbium_Tb, Dysprosium_Dy - Holmium_Ho, Erbium_Er,
Thulium_Tm, Ytterbium_Yb, Lutetium_Lu - Tantalum_Ta, Tungsten_W,
Rhenium_Re, Osmium_Os, Iridium_Ir - Platinum_Pt, Gold_Au, Palladium_Pd,
Rhodium_Rh, Scandium_Sc


------------------------------------------------------------------------

## 3. RELEVANT ORGANIZATIONS & STANDARDS

### 3.1 Tier 1 Organizations (Primary Standards)

**World Health Organization (WHO)** - Role: Global drinking water
quality guidelines - Standards: WHO Guidelines for Drinking-water
Quality (GDWQ) - Coverage: Comprehensive limits for heavy metals and
trace elements - Authority: International health guidance

**US Environmental Protection Agency (EPA)** - Role: US federal
environmental regulation - Standards: National Primary Drinking Water
Regulations (NPDWR) - Coverage: Legally enforceable standards for public
water systems - Authority: Federal regulatory enforcement

**Bureau of Indian Standards (BIS)** - Role: National standardization
body for India - Standards: IS 10500:2012 Drinking Water
Specifications - Coverage: Comprehensive Indian drinking water
standards - Authority: National standards for India

**European Union (EU)** - Role: Regional water quality regulation for EU
member states - Standards: EU Drinking Water Directive, Groundwater
Directive - Coverage: Mandatory standards for EU countries - Authority:
Regional regulatory framework

### 3.2 Tier 2 Organizations (Regional/National)

**Health Canada** - Canadian drinking water guidelines **Australian
Drinking Water Guidelines (ADWG)** - Asia-Pacific standards **Central
Ground Water Board (CGWB) India** - Groundwater-specific monitoring
**Environmental Protection Agency Ireland** - European groundwater focus

### 3.3 Tier 3 Organizations (Technical/Methods)

**International Organization for Standardization (ISO)** - Analytical
methods **American Society for Testing and Materials (ASTM)** -
Technical procedures **American Public Health Association (APHA)** -
Laboratory methods **Various national standards bodies** -
Country-specific requirements

### 3.4 International Networks

**WHO International Network of Drinking-water and Sanitation Regulators
(RegNet)** **United Nations Water (UN-Water)** **International Water
Association (IWA)** **Global Water Partnership (GWP)** **International
Association of Hydrogeologists (IAH)**

------------------------------------------------------------------------

