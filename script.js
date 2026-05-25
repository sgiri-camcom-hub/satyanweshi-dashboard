/* ==========================================================================
   CONTROLLER: Satyanweshi Executive OS Console Dashboard Logic
   Integrates real historical daily brief datasets, 5-bar SLA distribution,
   chronological volume line trends, context menus, and client advisories.
   ========================================================================== */

// ── PRE-COMPILED CORE OPERATIONAL DATASET (Real Briefs: May 17 - May 24, 2026) ─ */
const HISTORICAL_BRIEFS = {
  "2026-05-17": {
    "date": "2026-05-17",
    "totals": {
      "cases": 1382,
      "failed": 64,
      "warnings": 5,
      "failure_rate_pct": 4.63
    },
    "summary": [
      {
        "customer": "HDFC ERGO",
        "region": "India",
        "claims_mtd": 13951,
        "pi_mtd": 2276,
        "total_mtd": 16227,
        "prev_month_same_period": 16686,
        "avg_per_day": 1014,
        "fy_total": 45514
      },
      {
        "customer": "BAGIC",
        "region": "India",
        "claims_mtd": 12801,
        "pi_mtd": 0,
        "total_mtd": 12801,
        "prev_month_same_period": 16499,
        "avg_per_day": 800,
        "fy_total": 40645
      },
      {
        "customer": "RSGI",
        "region": "India",
        "claims_mtd": 2540,
        "pi_mtd": 680,
        "total_mtd": 3220,
        "prev_month_same_period": 1190,
        "avg_per_day": 201,
        "fy_total": 7254
      },
      {
        "customer": "Tata AIG",
        "region": "India",
        "claims_mtd": 0,
        "pi_mtd": 3076,
        "total_mtd": 3076,
        "prev_month_same_period": 3344,
        "avg_per_day": 192,
        "fy_total": 9370
      },
      {
        "customer": "Zurich",
        "region": "SEA",
        "claims_mtd": 1790,
        "pi_mtd": 158,
        "total_mtd": 1948,
        "prev_month_same_period": 2358,
        "avg_per_day": 121,
        "fy_total": 6171
      },
      {
        "customer": "QuickInSure",
        "region": "India",
        "claims_mtd": 0,
        "pi_mtd": 1211,
        "total_mtd": 1211,
        "prev_month_same_period": 1216,
        "avg_per_day": 75,
        "fy_total": 3543
      }
    ],
    "clients": {
      "bagic_claims": {
        "cases": 293,
        "completed": 280,
        "failed": 13,
        "failure_rate_pct": 4.44,
        "warnings": [
          "High-damage case(s) (avg today 6.1 parts/claim, flagged \u226518):\n      \u2022 `d5315b9f1cb7` \u2014 22 parts at 2026-05-16 13:49\n      \u2022 `f87c8133d1f0` \u2014 21 parts at 2026-05-16 17:15\n      \u2022 `203d31ce98e3` \u2014 18 parts at 2026-05-16 12:24\n      \u2022 `4d3ae6631f45` \u2014 18 parts at 2026-05-16 10:35\n      \u2022 `3d40564ee9c0` \u2014 18 parts at 2026-05-16 19:38"
        ],
        "failures": {
          "Inverted Images": 13
        },
        "buckets": {
          "0-3 min": 123,
          "4-5 min": 61,
          "6-10 min": 43,
          ">10 min": 8
        },
        "da_time": 39.5,
        "da_bot_time": 1.786
      },
      "hdfc_breakin": {
        "cases": 132,
        "completed": 132,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [],
        "failures": {},
        "buckets": {
          "0-3 min": 74,
          "4-5 min": 27,
          "6-10 min": 4,
          ">10 min": 0
        },
        "da_time": 20.0,
        "da_bot_time": 1.464
      },
      "hdfc_claims": {
        "cases": 407,
        "completed": 366,
        "failed": 41,
        "failure_rate_pct": 10.07,
        "warnings": [
          "Failure rate spike: 10.1% (41/407) vs 30-day baseline 5.1% (\u0394=+5.0 pp).",
          "High-damage case(s) (avg today 6.3 parts/claim, flagged \u226519):\n      \u2022 `35e0e1c75889` \u2014 22 parts at 2026-05-16 14:56\n      \u2022 `d86c77d59bfb` \u2014 21 parts at 2026-05-16 17:56\n      \u2022 `a386950c36fc` \u2014 21 parts at 2026-05-16 15:49\n      \u2022 `fc868729bb7e` \u2014 20 parts at 2026-05-16 13:46\n      \u2022 `58bce221a491` \u2014 19 parts at 2026-05-16 10:32"
        ],
        "failures": {
          "Could not identify minimum required car images.": 18,
          "Irrelevant/Inappropriate images.": 13,
          "Commercial/2W/3W": 10
        },
        "buckets": {
          "0-3 min": 207,
          "4-5 min": 97,
          "6-10 min": 3,
          ">10 min": 0
        },
        "da_time": 81.5,
        "da_bot_time": 2.0140000000000002
      },
      "quickinsure": {
        "cases": 74,
        "completed": 74,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [],
        "failures": {},
        "buckets": {
          "0-3 min": 0,
          "4-5 min": 0,
          "6-10 min": 0,
          ">10 min": 0
        },
        "da_time": 20.0,
        "da_bot_time": 1.3479999999999999
      },
      "rsi_claims": {
        "cases": 128,
        "completed": 128,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [
          "High-damage case(s) (avg today 6.5 parts/claim, flagged \u226519):\n      \u2022 `1dc7bc6d5fbc` \u2014 20 parts at 2026-05-16 17:58\n      \u2022 `c1cc18ea06b8` \u2014 20 parts at 2026-05-16 11:34"
        ],
        "failures": {},
        "buckets": {
          "0-3 min": 57,
          "4-5 min": 36,
          "6-10 min": 6,
          ">10 min": 0
        },
        "da_time": 20.0,
        "da_bot_time": 1.456
      },
      "rsi_pi": {
        "cases": 40,
        "completed": 36,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [],
        "failures": {},
        "buckets": {
          "0-3 min": 19,
          "4-5 min": 18,
          "6-10 min": 2,
          ">10 min": 1
        },
        "da_time": 20.0,
        "da_bot_time": 1.28
      },
      "tata_aig_pi": {
        "cases": 220,
        "completed": 215,
        "failed": 5,
        "failure_rate_pct": 2.27,
        "warnings": [
          "High-damage case(s) (avg today 7.1 parts/claim, flagged \u226518):\n      \u2022 `2b2b81959868` \u2014 19 parts at 2026-05-16 09:25"
        ],
        "failures": {
          "Irrelevant/Inappropriate images.": 4,
          "Could not identify minimum required car images.": 1
        },
        "buckets": {
          "0-3 min": 50,
          "4-5 min": 105,
          "6-10 min": 4,
          ">10 min": 0
        },
        "da_time": 27.5,
        "da_bot_time": 1.64
      },
      "zurich_claims": {
        "cases": 78,
        "completed": 73,
        "failed": 5,
        "failure_rate_pct": 6.41,
        "warnings": [],
        "failures": {
          "Commercial/2W/3W": 2,
          "Irrelevant/Inappropriate images.": 2,
          "Could not identify minimun requirments of images": 1
        },
        "buckets": {
          "0-3 min": 38,
          "4-5 min": 18,
          "6-10 min": 4,
          ">10 min": 1
        },
        "da_time": 27.5,
        "da_bot_time": 1.3559999999999999
      },
      "zurich_pi": {
        "cases": 10,
        "completed": 10,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [],
        "failures": {},
        "buckets": {
          "0-3 min": 9,
          "4-5 min": 0,
          "6-10 min": 1,
          ">10 min": 0
        },
        "da_time": 20.0,
        "da_bot_time": 1.22
      }
    }
  },
  "2026-05-18": {
    "date": "2026-05-18",
    "totals": {
      "cases": 3307,
      "failed": 103,
      "warnings": 6,
      "failure_rate_pct": 3.11
    },
    "summary": [
      {
        "customer": "HDFC ERGO",
        "region": "India",
        "claims_mtd": 15248,
        "pi_mtd": 2461,
        "total_mtd": 17709,
        "prev_month_same_period": 18397,
        "avg_per_day": 983,
        "fy_total": 46996
      },
      {
        "customer": "BAGIC",
        "region": "India",
        "claims_mtd": 13909,
        "pi_mtd": 0,
        "total_mtd": 13909,
        "prev_month_same_period": 18044,
        "avg_per_day": 772,
        "fy_total": 41753
      },
      {
        "customer": "RSGI",
        "region": "India",
        "claims_mtd": 2774,
        "pi_mtd": 738,
        "total_mtd": 3512,
        "prev_month_same_period": 1600,
        "avg_per_day": 195,
        "fy_total": 7546
      },
      {
        "customer": "Tata AIG",
        "region": "India",
        "claims_mtd": 0,
        "pi_mtd": 3356,
        "total_mtd": 3356,
        "prev_month_same_period": 3822,
        "avg_per_day": 186,
        "fy_total": 9650
      },
      {
        "customer": "Zurich",
        "region": "SEA",
        "claims_mtd": 2042,
        "pi_mtd": 171,
        "total_mtd": 2213,
        "prev_month_same_period": 2592,
        "avg_per_day": 122,
        "fy_total": 6436
      },
      {
        "customer": "QuickInSure",
        "region": "India",
        "claims_mtd": 0,
        "pi_mtd": 1293,
        "total_mtd": 1293,
        "prev_month_same_period": 1406,
        "avg_per_day": 71,
        "fy_total": 3625
      }
    ],
    "clients": {
      "bagic_claims": {
        "cases": 1066,
        "completed": 1045,
        "failed": 21,
        "failure_rate_pct": 1.97,
        "warnings": [
          "High-damage case(s) (avg today 5.9 parts/claim, flagged \u226517):\n      \u2022 `daae9760c76c` \u2014 24 parts at 2026-05-18 18:55\n      \u2022 `ae1422fb65aa` \u2014 22 parts at 2026-05-18 20:21\n      \u2022 `cf0f95dbda13` \u2014 21 parts at 2026-05-18 19:36\n      \u2022 `d2a668e22167` \u2014 20 parts at 2026-05-18 21:44\n      \u2022 `2794ea4d4c65` \u2014 20 parts at 2026-05-18 17:59"
        ],
        "failures": {
          "Inverted Images": 19,
          "Commercial/2W/3W": 1,
          "Could not identify minimum requirements of images": 1
        },
        "buckets": {
          "0-3 min": 260,
          "4-5 min": 235,
          "6-10 min": 209,
          ">10 min": 148
        },
        "da_time": 51.5,
        "da_bot_time": 3.332
      },
      "hdfc_breakin": {
        "cases": 173,
        "completed": 173,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [
          "High-damage case(s) (avg today 4.4 parts/claim, flagged \u226515):\n      \u2022 `28efdbdbea90` \u2014 16 parts at 2026-05-18 15:54\n      \u2022 `eb4c0dfad762` \u2014 15 parts at 2026-05-18 09:53"
        ],
        "failures": {},
        "buckets": {
          "0-3 min": 82,
          "4-5 min": 47,
          "6-10 min": 10,
          ">10 min": 0
        },
        "da_time": 20.0,
        "da_bot_time": 1.546
      },
      "hdfc_claims": {
        "cases": 1282,
        "completed": 1229,
        "failed": 53,
        "failure_rate_pct": 4.13,
        "warnings": [
          "High-damage case(s) (avg today 6.1 parts/claim, flagged \u226518):\n      \u2022 `4a3ef5c5a778` \u2014 25 parts at 2026-05-18 18:01\n      \u2022 `ad08e15ae21a` \u2014 24 parts at 2026-05-18 15:42\n      \u2022 `c2d6a4478cb9` \u2014 24 parts at 2026-05-18 16:35\n      \u2022 `df822ce8cac6` \u2014 22 parts at 2026-05-18 12:46\n      \u2022 `8758da38d83c` \u2014 21 parts at 2026-05-18 15:57"
        ],
        "failures": {
          "Could not identify minimum required car images.": 27,
          "Commercial/2W/3W": 17,
          "Irrelevant/Inappropriate images.": 8,
          "Different car images.": 1
        },
        "buckets": {
          "0-3 min": 562,
          "4-5 min": 419,
          "6-10 min": 15,
          ">10 min": 0
        },
        "da_time": 99.5,
        "da_bot_time": 3.7640000000000002
      },
      "quickinsure": {
        "cases": 64,
        "completed": 64,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [
          "Volume *down*: 64 cases vs baseline ~92 (same weekday, last 8w). \u0394=-30.5%."
        ],
        "failures": {},
        "buckets": {
          "0-3 min": 0,
          "4-5 min": 0,
          "6-10 min": 0,
          ">10 min": 0
        },
        "da_time": 20.0,
        "da_bot_time": 1.3279999999999998
      },
      "rsi_claims": {
        "cases": 213,
        "completed": 213,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [],
        "failures": {},
        "buckets": {
          "0-3 min": 71,
          "4-5 min": 77,
          "6-10 min": 13,
          ">10 min": 3
        },
        "da_time": 20.0,
        "da_bot_time": 1.626
      },
      "rsi_pi": {
        "cases": 50,
        "completed": 45,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [],
        "failures": {},
        "buckets": {
          "0-3 min": 16,
          "4-5 min": 30,
          "6-10 min": 4,
          ">10 min": 0
        },
        "da_time": 20.0,
        "da_bot_time": 1.3
      },
      "tata_aig_pi": {
        "cases": 218,
        "completed": 216,
        "failed": 2,
        "failure_rate_pct": 0.92,
        "warnings": [
          "High-damage case(s) (avg today 5.7 parts/claim, flagged \u226517):\n      \u2022 `1ec31ad4ef6a` \u2014 18 parts at 2026-05-18 18:08\n      \u2022 `742d89ba9d0e` \u2014 18 parts at 2026-05-18 18:26\n      \u2022 `c07121f3f54f` \u2014 18 parts at 2026-05-18 18:43"
        ],
        "failures": {
          "Irrelevant/Inappropriate images.": 2
        },
        "buckets": {
          "0-3 min": 61,
          "4-5 min": 105,
          "6-10 min": 11,
          ">10 min": 0
        },
        "da_time": 23.0,
        "da_bot_time": 1.636
      },
      "zurich_claims": {
        "cases": 231,
        "completed": 204,
        "failed": 27,
        "failure_rate_pct": 11.69,
        "warnings": [
          "High-damage case(s) (avg today 5.7 parts/claim, flagged \u226516):\n      \u2022 `82d71a83a506` \u2014 19 parts at 2026-05-18 06:55"
        ],
        "failures": {
          "Irrelevant/Inappropriate images.": 16,
          "Could not identify minimun requirments of images": 9,
          "Commercial/2W/3W": 2
        },
        "buckets": {
          "0-3 min": 113,
          "4-5 min": 51,
          "6-10 min": 12,
          ">10 min": 0
        },
        "da_time": 60.5,
        "da_bot_time": 1.662
      },
      "zurich_pi": {
        "cases": 10,
        "completed": 10,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [],
        "failures": {},
        "buckets": {
          "0-3 min": 9,
          "4-5 min": 0,
          "6-10 min": 0,
          ">10 min": 1
        },
        "da_time": 20.0,
        "da_bot_time": 1.22
      }
    }
  },
  "2026-05-19": {
    "date": "2026-05-19",
    "totals": {
      "cases": 3307,
      "failed": 103,
      "warnings": 6,
      "failure_rate_pct": 3.11
    },
    "summary": [
      {
        "customer": "HDFC ERGO",
        "region": "India",
        "claims_mtd": 15248,
        "pi_mtd": 2461,
        "total_mtd": 17709,
        "prev_month_same_period": 18397,
        "avg_per_day": 983,
        "fy_total": 46996
      },
      {
        "customer": "BAGIC",
        "region": "India",
        "claims_mtd": 13909,
        "pi_mtd": 0,
        "total_mtd": 13909,
        "prev_month_same_period": 18044,
        "avg_per_day": 772,
        "fy_total": 41753
      },
      {
        "customer": "RSGI",
        "region": "India",
        "claims_mtd": 2774,
        "pi_mtd": 738,
        "total_mtd": 3512,
        "prev_month_same_period": 1600,
        "avg_per_day": 195,
        "fy_total": 7546
      },
      {
        "customer": "Tata AIG",
        "region": "India",
        "claims_mtd": 0,
        "pi_mtd": 3356,
        "total_mtd": 3356,
        "prev_month_same_period": 3822,
        "avg_per_day": 186,
        "fy_total": 9650
      },
      {
        "customer": "Zurich",
        "region": "SEA",
        "claims_mtd": 2042,
        "pi_mtd": 171,
        "total_mtd": 2213,
        "prev_month_same_period": 2592,
        "avg_per_day": 122,
        "fy_total": 6436
      },
      {
        "customer": "QuickInSure",
        "region": "India",
        "claims_mtd": 0,
        "pi_mtd": 1293,
        "total_mtd": 1293,
        "prev_month_same_period": 1406,
        "avg_per_day": 71,
        "fy_total": 3625
      }
    ],
    "clients": {
      "bagic_claims": {
        "cases": 1066,
        "completed": 1045,
        "failed": 21,
        "failure_rate_pct": 1.97,
        "warnings": [
          "High-damage case(s) (avg today 5.9 parts/claim, flagged \u226517):\n      \u2022 `daae9760c76c` \u2014 24 parts at 2026-05-18 18:55\n      \u2022 `ae1422fb65aa` \u2014 22 parts at 2026-05-18 20:21\n      \u2022 `cf0f95dbda13` \u2014 21 parts at 2026-05-18 19:36\n      \u2022 `d2a668e22167` \u2014 20 parts at 2026-05-18 21:44\n      \u2022 `2794ea4d4c65` \u2014 20 parts at 2026-05-18 17:59"
        ],
        "failures": {
          "Inverted Images": 19,
          "Commercial/2W/3W": 1,
          "Could not identify minimum requirements of images": 1
        },
        "buckets": {
          "0-3 min": 260,
          "4-5 min": 235,
          "6-10 min": 209,
          ">10 min": 148
        },
        "da_time": 51.5,
        "da_bot_time": 3.332
      },
      "hdfc_breakin": {
        "cases": 173,
        "completed": 173,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [
          "High-damage case(s) (avg today 4.4 parts/claim, flagged \u226515):\n      \u2022 `28efdbdbea90` \u2014 16 parts at 2026-05-18 15:54\n      \u2022 `eb4c0dfad762` \u2014 15 parts at 2026-05-18 09:53"
        ],
        "failures": {},
        "buckets": {
          "0-3 min": 82,
          "4-5 min": 47,
          "6-10 min": 10,
          ">10 min": 0
        },
        "da_time": 20.0,
        "da_bot_time": 1.546
      },
      "hdfc_claims": {
        "cases": 1282,
        "completed": 1229,
        "failed": 53,
        "failure_rate_pct": 4.13,
        "warnings": [
          "High-damage case(s) (avg today 6.1 parts/claim, flagged \u226518):\n      \u2022 `4a3ef5c5a778` \u2014 25 parts at 2026-05-18 18:01\n      \u2022 `ad08e15ae21a` \u2014 24 parts at 2026-05-18 15:42\n      \u2022 `c2d6a4478cb9` \u2014 24 parts at 2026-05-18 16:35\n      \u2022 `df822ce8cac6` \u2014 22 parts at 2026-05-18 12:46\n      \u2022 `8758da38d83c` \u2014 21 parts at 2026-05-18 15:57"
        ],
        "failures": {
          "Could not identify minimum required car images.": 27,
          "Commercial/2W/3W": 17,
          "Irrelevant/Inappropriate images.": 8,
          "Different car images.": 1
        },
        "buckets": {
          "0-3 min": 562,
          "4-5 min": 419,
          "6-10 min": 15,
          ">10 min": 0
        },
        "da_time": 99.5,
        "da_bot_time": 3.7640000000000002
      },
      "quickinsure": {
        "cases": 64,
        "completed": 64,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [
          "Volume *down*: 64 cases vs baseline ~92 (same weekday, last 8w). \u0394=-30.5%."
        ],
        "failures": {},
        "buckets": {
          "0-3 min": 0,
          "4-5 min": 0,
          "6-10 min": 0,
          ">10 min": 0
        },
        "da_time": 20.0,
        "da_bot_time": 1.3279999999999998
      },
      "rsi_claims": {
        "cases": 213,
        "completed": 213,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [],
        "failures": {},
        "buckets": {
          "0-3 min": 71,
          "4-5 min": 77,
          "6-10 min": 13,
          ">10 min": 3
        },
        "da_time": 20.0,
        "da_bot_time": 1.626
      },
      "rsi_pi": {
        "cases": 50,
        "completed": 45,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [],
        "failures": {},
        "buckets": {
          "0-3 min": 16,
          "4-5 min": 30,
          "6-10 min": 4,
          ">10 min": 0
        },
        "da_time": 20.0,
        "da_bot_time": 1.3
      },
      "tata_aig_pi": {
        "cases": 218,
        "completed": 216,
        "failed": 2,
        "failure_rate_pct": 0.92,
        "warnings": [
          "High-damage case(s) (avg today 5.7 parts/claim, flagged \u226517):\n      \u2022 `1ec31ad4ef6a` \u2014 18 parts at 2026-05-18 18:08\n      \u2022 `742d89ba9d0e` \u2014 18 parts at 2026-05-18 18:26\n      \u2022 `c07121f3f54f` \u2014 18 parts at 2026-05-18 18:43"
        ],
        "failures": {
          "Irrelevant/Inappropriate images.": 2
        },
        "buckets": {
          "0-3 min": 61,
          "4-5 min": 105,
          "6-10 min": 11,
          ">10 min": 0
        },
        "da_time": 23.0,
        "da_bot_time": 1.636
      },
      "zurich_claims": {
        "cases": 231,
        "completed": 204,
        "failed": 27,
        "failure_rate_pct": 11.69,
        "warnings": [
          "High-damage case(s) (avg today 5.7 parts/claim, flagged \u226516):\n      \u2022 `82d71a83a506` \u2014 19 parts at 2026-05-18 06:55"
        ],
        "failures": {
          "Irrelevant/Inappropriate images.": 16,
          "Could not identify minimun requirments of images": 9,
          "Commercial/2W/3W": 2
        },
        "buckets": {
          "0-3 min": 113,
          "4-5 min": 51,
          "6-10 min": 12,
          ">10 min": 0
        },
        "da_time": 60.5,
        "da_bot_time": 1.662
      },
      "zurich_pi": {
        "cases": 10,
        "completed": 10,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [],
        "failures": {},
        "buckets": {
          "0-3 min": 9,
          "4-5 min": 0,
          "6-10 min": 0,
          ">10 min": 1
        },
        "da_time": 20.0,
        "da_bot_time": 1.22
      }
    }
  },
  "2026-05-21": {
    "date": "2026-05-21",
    "totals": {
      "cases": 3125,
      "failed": 109,
      "warnings": 5,
      "failure_rate_pct": 3.49
    },
    "summary": [
      {
        "customer": "HDFC ERGO",
        "region": "India",
        "claims_mtd": 17758,
        "pi_mtd": 2764,
        "total_mtd": 20522,
        "prev_month_same_period": 19791,
        "avg_per_day": 1026,
        "fy_total": 49809
      },
      {
        "customer": "BAGIC",
        "region": "India",
        "claims_mtd": 16012,
        "pi_mtd": 0,
        "total_mtd": 16012,
        "prev_month_same_period": 19371,
        "avg_per_day": 800,
        "fy_total": 43856
      },
      {
        "customer": "RSGI",
        "region": "India",
        "claims_mtd": 3284,
        "pi_mtd": 859,
        "total_mtd": 4143,
        "prev_month_same_period": 1868,
        "avg_per_day": 207,
        "fy_total": 8177
      },
      {
        "customer": "Tata AIG",
        "region": "India",
        "claims_mtd": 0,
        "pi_mtd": 3822,
        "total_mtd": 3822,
        "prev_month_same_period": 4124,
        "avg_per_day": 191,
        "fy_total": 10116
      },
      {
        "customer": "Zurich",
        "region": "SEA",
        "claims_mtd": 2375,
        "pi_mtd": 193,
        "total_mtd": 2568,
        "prev_month_same_period": 2841,
        "avg_per_day": 128,
        "fy_total": 6791
      },
      {
        "customer": "QuickInSure",
        "region": "India",
        "claims_mtd": 0,
        "pi_mtd": 1447,
        "total_mtd": 1447,
        "prev_month_same_period": 1515,
        "avg_per_day": 72,
        "fy_total": 3779
      }
    ],
    "clients": {
      "bagic_claims": {
        "cases": 1037,
        "completed": 1011,
        "failed": 26,
        "failure_rate_pct": 2.51,
        "warnings": [
          "High-damage case(s) (avg today 5.6 parts/claim, flagged \u226516):\n      \u2022 `c397eec98730` \u2014 21 parts at 2026-05-20 14:22\n      \u2022 `3696f523fe6a` \u2014 21 parts at 2026-05-20 12:23\n      \u2022 `725d29898e82` \u2014 21 parts at 2026-05-20 19:45\n      \u2022 `655131186758` \u2014 20 parts at 2026-05-20 13:54\n      \u2022 `01550a65bdce` \u2014 19 parts at 2026-05-20 13:30"
        ],
        "failures": {
          "Inverted Images": 24,
          "Could not identify minimum requirements of images": 1,
          "Different car images.": 1
        },
        "buckets": {
          "0-3 min": 253,
          "4-5 min": 224,
          "6-10 min": 273,
          ">10 min": 77
        },
        "da_time": 59.0,
        "da_bot_time": 3.274
      },
      "hdfc_breakin": {
        "cases": 154,
        "completed": 154,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [],
        "failures": {},
        "buckets": {
          "0-3 min": 58,
          "4-5 min": 38,
          "6-10 min": 21,
          ">10 min": 2
        },
        "da_time": 20.0,
        "da_bot_time": 1.508
      },
      "hdfc_claims": {
        "cases": 1183,
        "completed": 1135,
        "failed": 48,
        "failure_rate_pct": 4.06,
        "warnings": [
          "High-damage case(s) (avg today 6.5 parts/claim, flagged \u226519):\n      \u2022 `53fe1acc857c` \u2014 37 parts at 2026-05-20 11:43\n      \u2022 `245049a2b9b6` \u2014 28 parts at 2026-05-20 16:30\n      \u2022 `8a6c57327745` \u2014 24 parts at 2026-05-20 16:34\n      \u2022 `1027a1fe5e0f` \u2014 23 parts at 2026-05-20 13:14\n      \u2022 `7cb5ad77c3da` \u2014 21 parts at 2026-05-20 17:25"
        ],
        "failures": {
          "Irrelevant/Inappropriate images.": 17,
          "Could not identify minimum required car images.": 15,
          "Commercial/2W/3W": 13,
          "Different car images.": 3
        },
        "buckets": {
          "0-3 min": 389,
          "4-5 min": 431,
          "6-10 min": 50,
          ">10 min": 54
        },
        "da_time": 92.0,
        "da_bot_time": 3.566
      },
      "quickinsure": {
        "cases": 81,
        "completed": 80,
        "failed": 1,
        "failure_rate_pct": 1.23,
        "warnings": [],
        "failures": {
          "Could not identify minimun requirments of images": 1
        },
        "buckets": {
          "0-3 min": 0,
          "4-5 min": 0,
          "6-10 min": 0,
          ">10 min": 0
        },
        "da_time": 21.5,
        "da_bot_time": 1.3619999999999999
      },
      "rsi_claims": {
        "cases": 259,
        "completed": 258,
        "failed": 1,
        "failure_rate_pct": 0.39,
        "warnings": [
          "High-damage case(s) (avg today 6.3 parts/claim, flagged \u226518):\n      \u2022 `e0c8500c8d1d` \u2014 20 parts at 2026-05-20 17:22"
        ],
        "failures": {
          "Commercial/2W/3W": 1
        },
        "buckets": {
          "0-3 min": 78,
          "4-5 min": 80,
          "6-10 min": 17,
          ">10 min": 30
        },
        "da_time": 21.5,
        "da_bot_time": 1.718
      },
      "rsi_pi": {
        "cases": 47,
        "completed": 40,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [],
        "failures": {},
        "buckets": {
          "0-3 min": 15,
          "4-5 min": 18,
          "6-10 min": 8,
          ">10 min": 6
        },
        "da_time": 20.0,
        "da_bot_time": 1.294
      },
      "tata_aig_pi": {
        "cases": 210,
        "completed": 207,
        "failed": 3,
        "failure_rate_pct": 1.43,
        "warnings": [
          "High-damage case(s) (avg today 6.1 parts/claim, flagged \u226518):\n      \u2022 `4adab026fa3e` \u2014 19 parts at 2026-05-20 15:53"
        ],
        "failures": {
          "Irrelevant/Inappropriate images.": 2,
          "Could not identify minimum required car images.": 1
        },
        "buckets": {
          "0-3 min": 34,
          "4-5 min": 98,
          "6-10 min": 9,
          ">10 min": 0
        },
        "da_time": 24.5,
        "da_bot_time": 1.6199999999999999
      },
      "zurich_claims": {
        "cases": 145,
        "completed": 115,
        "failed": 30,
        "failure_rate_pct": 20.69,
        "warnings": [
          "High-damage case(s) (avg today 5.1 parts/claim, flagged \u226515):\n      \u2022 `b6c504248041` \u2014 15 parts at 2026-05-20 08:19"
        ],
        "failures": {
          "Irrelevant/Inappropriate images.": 24,
          "Could not identify minimun requirments of images": 5,
          "Commercial/2W/3W": 1
        },
        "buckets": {
          "0-3 min": 69,
          "4-5 min": 26,
          "6-10 min": 13,
          ">10 min": 4
        },
        "da_time": 65.0,
        "da_bot_time": 1.49
      },
      "zurich_pi": {
        "cases": 9,
        "completed": 9,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [],
        "failures": {},
        "buckets": {
          "0-3 min": 7,
          "4-5 min": 2,
          "6-10 min": 0,
          ">10 min": 0
        },
        "da_time": 20.0,
        "da_bot_time": 1.218
      }
    }
  },
  "2026-05-22": {
    "date": "2026-05-22",
    "totals": {
      "cases": 2789,
      "failed": 96,
      "warnings": 6,
      "failure_rate_pct": 3.44
    },
    "summary": [
      {
        "customer": "HDFC ERGO",
        "region": "India",
        "claims_mtd": 18812,
        "pi_mtd": 2901,
        "total_mtd": 21713,
        "prev_month_same_period": 21117,
        "avg_per_day": 1033,
        "fy_total": 51000
      },
      {
        "customer": "BAGIC",
        "region": "India",
        "claims_mtd": 16891,
        "pi_mtd": 0,
        "total_mtd": 16891,
        "prev_month_same_period": 20732,
        "avg_per_day": 804,
        "fy_total": 44735
      },
      {
        "customer": "RSGI",
        "region": "India",
        "claims_mtd": 3508,
        "pi_mtd": 922,
        "total_mtd": 4430,
        "prev_month_same_period": 2167,
        "avg_per_day": 210,
        "fy_total": 8464
      },
      {
        "customer": "Tata AIG",
        "region": "India",
        "claims_mtd": 0,
        "pi_mtd": 4045,
        "total_mtd": 4045,
        "prev_month_same_period": 4353,
        "avg_per_day": 192,
        "fy_total": 10339
      },
      {
        "customer": "Zurich",
        "region": "SEA",
        "claims_mtd": 2482,
        "pi_mtd": 209,
        "total_mtd": 2691,
        "prev_month_same_period": 3031,
        "avg_per_day": 128,
        "fy_total": 6914
      },
      {
        "customer": "QuickInSure",
        "region": "India",
        "claims_mtd": 0,
        "pi_mtd": 1533,
        "total_mtd": 1533,
        "prev_month_same_period": 1587,
        "avg_per_day": 73,
        "fy_total": 3865
      }
    ],
    "clients": {
      "bagic_claims": {
        "cases": 879,
        "completed": 854,
        "failed": 25,
        "failure_rate_pct": 2.84,
        "warnings": [
          "High-damage case(s) (avg today 5.7 parts/claim, flagged \u226516):\n      \u2022 `8ee76181899e` \u2014 24 parts at 2026-05-21 15:40\n      \u2022 `1fe79b9a4f49` \u2014 19 parts at 2026-05-21 14:36\n      \u2022 `a97a96244138` \u2014 19 parts at 2026-05-21 16:56\n      \u2022 `1d68e2c8352b` \u2014 18 parts at 2026-05-21 11:50\n      \u2022 `4bac216bedc3` \u2014 17 parts at 2026-05-21 13:36"
        ],
        "failures": {
          "Inverted Images": 25
        },
        "buckets": {
          "0-3 min": 371,
          "4-5 min": 232,
          "6-10 min": 96,
          ">10 min": 4
        },
        "da_time": 57.5,
        "da_bot_time": 2.958
      },
      "hdfc_breakin": {
        "cases": 137,
        "completed": 137,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [],
        "failures": {},
        "buckets": {
          "0-3 min": 59,
          "4-5 min": 47,
          "6-10 min": 2,
          ">10 min": 0
        },
        "da_time": 20.0,
        "da_bot_time": 1.474
      },
      "hdfc_claims": {
        "cases": 1054,
        "completed": 996,
        "failed": 58,
        "failure_rate_pct": 5.5,
        "warnings": [
          "High-damage case(s) (avg today 6.2 parts/claim, flagged \u226518):\n      \u2022 `95f123a9e5e4` \u2014 24 parts at 2026-05-21 17:22\n      \u2022 `42bf9072d996` \u2014 24 parts at 2026-05-21 17:23\n      \u2022 `cd11e7133669` \u2014 22 parts at 2026-05-21 17:43\n      \u2022 `0d0e43414a7b` \u2014 21 parts at 2026-05-21 11:26\n      \u2022 `b06886552ae2` \u2014 21 parts at 2026-05-21 10:49"
        ],
        "failures": {
          "Irrelevant/Inappropriate images.": 21,
          "Commercial/2W/3W": 20,
          "Could not identify minimum required car images.": 15,
          "Different car images.": 2
        },
        "buckets": {
          "0-3 min": 471,
          "4-5 min": 353,
          "6-10 min": 3,
          ">10 min": 0
        },
        "da_time": 107.0,
        "da_bot_time": 3.308
      },
      "quickinsure": {
        "cases": 86,
        "completed": 86,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [
          "High-damage case(s) (avg today 6.0 parts/claim, flagged \u226517):\n      \u2022 `05f114aba36a` \u2014 18 parts at 2026-05-21 14:09"
        ],
        "failures": {},
        "buckets": {
          "0-3 min": 0,
          "4-5 min": 0,
          "6-10 min": 0,
          ">10 min": 0
        },
        "da_time": 20.0,
        "da_bot_time": 1.3719999999999999
      },
      "rsi_claims": {
        "cases": 224,
        "completed": 224,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [
          "High-damage case(s) (avg today 6.2 parts/claim, flagged \u226517):\n      \u2022 `2116a6463d2c` \u2014 19 parts at 2026-05-21 16:55\n      \u2022 `84ad9ebd4e98` \u2014 19 parts at 2026-05-21 17:47"
        ],
        "failures": {},
        "buckets": {
          "0-3 min": 69,
          "4-5 min": 81,
          "6-10 min": 21,
          ">10 min": 2
        },
        "da_time": 20.0,
        "da_bot_time": 1.648
      },
      "rsi_pi": {
        "cases": 63,
        "completed": 59,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [
          "High-damage case(s) (avg today 6.4 parts/claim, flagged \u226518):\n      \u2022 `62582c5c640b` \u2014 20 parts at 2026-05-21 18:17"
        ],
        "failures": {},
        "buckets": {
          "0-3 min": 14,
          "4-5 min": 37,
          "6-10 min": 11,
          ">10 min": 1
        },
        "da_time": 20.0,
        "da_bot_time": 1.326
      },
      "tata_aig_pi": {
        "cases": 223,
        "completed": 221,
        "failed": 2,
        "failure_rate_pct": 0.9,
        "warnings": [],
        "failures": {
          "Irrelevant/Inappropriate images.": 2
        },
        "buckets": {
          "0-3 min": 37,
          "4-5 min": 90,
          "6-10 min": 7,
          ">10 min": 0
        },
        "da_time": 23.0,
        "da_bot_time": 1.646
      },
      "zurich_claims": {
        "cases": 107,
        "completed": 98,
        "failed": 9,
        "failure_rate_pct": 8.41,
        "warnings": [],
        "failures": {
          "Irrelevant/Inappropriate images.": 6,
          "Could not identify minimun requirments of images": 2,
          "Different car images.": 1
        },
        "buckets": {
          "0-3 min": 52,
          "4-5 min": 26,
          "6-10 min": 6,
          ">10 min": 0
        },
        "da_time": 33.5,
        "da_bot_time": 1.414
      },
      "zurich_pi": {
        "cases": 16,
        "completed": 14,
        "failed": 2,
        "failure_rate_pct": 12.5,
        "warnings": [
          "Failure rate spike: 12.5% (2/16) vs 30-day baseline 5.2% (\u0394=+7.3 pp)."
        ],
        "failures": {
          "Commercial/2W/3W": 2
        },
        "buckets": {
          "0-3 min": 8,
          "4-5 min": 6,
          "6-10 min": 1,
          ">10 min": 1
        },
        "da_time": 23.0,
        "da_bot_time": 1.232
      }
    }
  },
  "2026-05-23": {
    "date": "2026-05-23",
    "totals": {
      "cases": 2834,
      "failed": 122,
      "warnings": 6,
      "failure_rate_pct": 4.3
    },
    "summary": [
      {
        "customer": "HDFC ERGO",
        "region": "India",
        "claims_mtd": 19883,
        "pi_mtd": 3048,
        "total_mtd": 22931,
        "prev_month_same_period": 22316,
        "avg_per_day": 1042,
        "fy_total": 52218
      },
      {
        "customer": "BAGIC",
        "region": "India",
        "claims_mtd": 17805,
        "pi_mtd": 0,
        "total_mtd": 17805,
        "prev_month_same_period": 21946,
        "avg_per_day": 809,
        "fy_total": 45649
      },
      {
        "customer": "RSGI",
        "region": "India",
        "claims_mtd": 3709,
        "pi_mtd": 988,
        "total_mtd": 4697,
        "prev_month_same_period": 2409,
        "avg_per_day": 213,
        "fy_total": 8731
      },
      {
        "customer": "Tata AIG",
        "region": "India",
        "claims_mtd": 0,
        "pi_mtd": 4277,
        "total_mtd": 4277,
        "prev_month_same_period": 4606,
        "avg_per_day": 194,
        "fy_total": 10571
      },
      {
        "customer": "Zurich",
        "region": "SEA",
        "claims_mtd": 2581,
        "pi_mtd": 218,
        "total_mtd": 2799,
        "prev_month_same_period": 3173,
        "avg_per_day": 127,
        "fy_total": 7022
      },
      {
        "customer": "QuickInSure",
        "region": "India",
        "claims_mtd": 0,
        "pi_mtd": 1628,
        "total_mtd": 1628,
        "prev_month_same_period": 1684,
        "avg_per_day": 74,
        "fy_total": 3960
      }
    ],
    "clients": {
      "bagic_claims": {
        "cases": 914,
        "completed": 890,
        "failed": 24,
        "failure_rate_pct": 2.63,
        "warnings": [
          "High-damage case(s) (avg today 5.7 parts/claim, flagged \u226517):\n      \u2022 `9428dc2bd1d0` \u2014 29 parts at 2026-05-22 13:36\n      \u2022 `7861dfcab23c` \u2014 22 parts at 2026-05-22 18:21\n      \u2022 `685708a47943` \u2014 20 parts at 2026-05-22 16:06\n      \u2022 `9f8d142fcd3d` \u2014 19 parts at 2026-05-22 11:00\n      \u2022 `e5cbd5ac13d2` \u2014 18 parts at 2026-05-22 08:04"
        ],
        "failures": {
          "Inverted Images": 21,
          "Different car images.": 1,
          "Could not identify minimum requirements of images": 1,
          "Invalid images": 1
        },
        "buckets": {
          "0-3 min": 330,
          "4-5 min": 280,
          "6-10 min": 117,
          ">10 min": 5
        },
        "da_time": 56.0,
        "da_bot_time": 3.028
      },
      "hdfc_breakin": {
        "cases": 147,
        "completed": 147,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [
          "High-damage case(s) (avg today 4.4 parts/claim, flagged \u226514):\n      \u2022 `057afce486b1` \u2014 15 parts at 2026-05-22 14:24\n      \u2022 `530711fa0e3b` \u2014 14 parts at 2026-05-22 12:47"
        ],
        "failures": {},
        "buckets": {
          "0-3 min": 63,
          "4-5 min": 48,
          "6-10 min": 7,
          ">10 min": 0
        },
        "da_time": 20.0,
        "da_bot_time": 1.494
      },
      "hdfc_claims": {
        "cases": 1071,
        "completed": 994,
        "failed": 77,
        "failure_rate_pct": 7.19,
        "warnings": [
          "High-damage case(s) (avg today 6.2 parts/claim, flagged \u226518):\n      \u2022 `c726688d5881` \u2014 31 parts at 2026-05-22 16:36\n      \u2022 `30fefa632682` \u2014 25 parts at 2026-05-22 17:30\n      \u2022 `09f1856a1b3b` \u2014 24 parts at 2026-05-22 18:31\n      \u2022 `0debd01c693b` \u2014 22 parts at 2026-05-22 11:39\n      \u2022 `c44c379ef38c` \u2014 20 parts at 2026-05-22 14:41"
        ],
        "failures": {
          "Could not identify minimum required car images.": 35,
          "Commercial/2W/3W": 22,
          "Irrelevant/Inappropriate images.": 18,
          "Different car images.": 2
        },
        "buckets": {
          "0-3 min": 369,
          "4-5 min": 448,
          "6-10 min": 14,
          ">10 min": 0
        },
        "da_time": 135.5,
        "da_bot_time": 3.3419999999999996
      },
      "quickinsure": {
        "cases": 95,
        "completed": 89,
        "failed": 6,
        "failure_rate_pct": 6.32,
        "warnings": [
          "Failure rate spike: 6.3% (6/95) vs 30-day baseline 0.2% (\u0394=+6.1 pp)."
        ],
        "failures": {
          "More than miximum requirments of images": 6
        },
        "buckets": {
          "0-3 min": 0,
          "4-5 min": 0,
          "6-10 min": 0,
          ">10 min": 0
        },
        "da_time": 29.0,
        "da_bot_time": 1.39
      },
      "rsi_claims": {
        "cases": 201,
        "completed": 201,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [
          "High-damage case(s) (avg today 6.7 parts/claim, flagged \u226518):\n      \u2022 `0bcfa3d32615` \u2014 19 parts at 2026-05-22 13:06"
        ],
        "failures": {},
        "buckets": {
          "0-3 min": 52,
          "4-5 min": 80,
          "6-10 min": 23,
          ">10 min": 3
        },
        "da_time": 20.0,
        "da_bot_time": 1.6019999999999999
      },
      "rsi_pi": {
        "cases": 66,
        "completed": 62,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [],
        "failures": {},
        "buckets": {
          "0-3 min": 24,
          "4-5 min": 37,
          "6-10 min": 5,
          ">10 min": 0
        },
        "da_time": 20.0,
        "da_bot_time": 1.3319999999999999
      },
      "tata_aig_pi": {
        "cases": 232,
        "completed": 229,
        "failed": 3,
        "failure_rate_pct": 1.29,
        "warnings": [
          "High-damage case(s) (avg today 6.0 parts/claim, flagged \u226517):\n      \u2022 `1d3a4762b779` \u2014 20 parts at 2026-05-22 13:21"
        ],
        "failures": {
          "Irrelevant/Inappropriate images.": 3
        },
        "buckets": {
          "0-3 min": 46,
          "4-5 min": 114,
          "6-10 min": 13,
          ">10 min": 0
        },
        "da_time": 24.5,
        "da_bot_time": 1.664
      },
      "zurich_claims": {
        "cases": 99,
        "completed": 87,
        "failed": 12,
        "failure_rate_pct": 12.12,
        "warnings": [],
        "failures": {
          "Irrelevant/Inappropriate images.": 11,
          "Could not identify minimun requirments of images": 1
        },
        "buckets": {
          "0-3 min": 53,
          "4-5 min": 18,
          "6-10 min": 7,
          ">10 min": 1
        },
        "da_time": 38.0,
        "da_bot_time": 1.398
      },
      "zurich_pi": {
        "cases": 9,
        "completed": 9,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [],
        "failures": {},
        "buckets": {
          "0-3 min": 6,
          "4-5 min": 1,
          "6-10 min": 1,
          ">10 min": 1
        },
        "da_time": 20.0,
        "da_bot_time": 1.218
      }
    }
  },
  "2026-05-24": {
    "date": "2026-05-24",
    "totals": {
      "cases": 1434,
      "failed": 60,
      "warnings": 5,
      "failure_rate_pct": 4.18
    },
    "summary": [
      {
        "customer": "HDFC ERGO",
        "region": "India",
        "claims_mtd": 20319,
        "pi_mtd": 3172,
        "total_mtd": 23491,
        "prev_month_same_period": 23414,
        "avg_per_day": 1021,
        "fy_total": 52778
      },
      {
        "customer": "BAGIC",
        "region": "India",
        "claims_mtd": 18126,
        "pi_mtd": 0,
        "total_mtd": 18126,
        "prev_month_same_period": 22855,
        "avg_per_day": 788,
        "fy_total": 45970
      },
      {
        "customer": "RSGI",
        "region": "India",
        "claims_mtd": 3865,
        "pi_mtd": 1041,
        "total_mtd": 4906,
        "prev_month_same_period": 2637,
        "avg_per_day": 213,
        "fy_total": 8940
      },
      {
        "customer": "Tata AIG",
        "region": "India",
        "claims_mtd": 0,
        "pi_mtd": 4464,
        "total_mtd": 4464,
        "prev_month_same_period": 4862,
        "avg_per_day": 194,
        "fy_total": 10758
      },
      {
        "customer": "Zurich",
        "region": "SEA",
        "claims_mtd": 2656,
        "pi_mtd": 227,
        "total_mtd": 2883,
        "prev_month_same_period": 3317,
        "avg_per_day": 125,
        "fy_total": 7106
      },
      {
        "customer": "QuickInSure",
        "region": "India",
        "claims_mtd": 0,
        "pi_mtd": 1701,
        "total_mtd": 1701,
        "prev_month_same_period": 1779,
        "avg_per_day": 73,
        "fy_total": 4033
      }
    ],
    "clients": {
      "bagic_claims": {
        "cases": 321,
        "completed": 307,
        "failed": 14,
        "failure_rate_pct": 4.36,
        "warnings": [
          "High-damage case(s) (avg today 6.2 parts/claim, flagged \u226518):\n      \u2022 `db8544ae537f` \u2014 22 parts at 2026-05-23 16:45\n      \u2022 `4e62642e385a` \u2014 20 parts at 2026-05-23 20:27\n      \u2022 `db6a5d8eeddb` \u2014 18 parts at 2026-05-23 11:51"
        ],
        "failures": {
          "Inverted Images": 14
        },
        "buckets": {
          "0-3 min": 83,
          "4-5 min": 78,
          "6-10 min": 58,
          ">10 min": 37
        },
        "da_time": 41.0,
        "da_bot_time": 1.842
      },
      "hdfc_breakin": {
        "cases": 124,
        "completed": 124,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [
          "High-damage case(s) (avg today 4.5 parts/claim, flagged \u226515):\n      \u2022 `d2ed8a840579` \u2014 19 parts at 2026-05-23 16:55\n      \u2022 `82d3b0543f43` \u2014 17 parts at 2026-05-23 14:47"
        ],
        "failures": {},
        "buckets": {
          "0-3 min": 50,
          "4-5 min": 41,
          "6-10 min": 6,
          ">10 min": 0
        },
        "da_time": 20.0,
        "da_bot_time": 1.448
      },
      "hdfc_claims": {
        "cases": 436,
        "completed": 403,
        "failed": 33,
        "failure_rate_pct": 7.57,
        "warnings": [
          "High-damage case(s) (avg today 7.0 parts/claim, flagged \u226520):\n      \u2022 `050e3e6085ba` \u2014 25 parts at 2026-05-23 10:54\n      \u2022 `920b2290bba0` \u2014 21 parts at 2026-05-23 12:52\n      \u2022 `d1f4ff5d0e3e` \u2014 21 parts at 2026-05-23 12:22"
        ],
        "failures": {
          "Could not identify minimum required car images.": 13,
          "Commercial/2W/3W": 11,
          "Irrelevant/Inappropriate images.": 9
        },
        "buckets": {
          "0-3 min": 155,
          "4-5 min": 174,
          "6-10 min": 6,
          ">10 min": 0
        },
        "da_time": 69.5,
        "da_bot_time": 2.072
      },
      "quickinsure": {
        "cases": 73,
        "completed": 73,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [],
        "failures": {},
        "buckets": {
          "0-3 min": 0,
          "4-5 min": 0,
          "6-10 min": 0,
          ">10 min": 0
        },
        "da_time": 20.0,
        "da_bot_time": 1.3459999999999999
      },
      "rsi_claims": {
        "cases": 156,
        "completed": 153,
        "failed": 3,
        "failure_rate_pct": 1.92,
        "warnings": [
          "High-damage case(s) (avg today 6.7 parts/claim, flagged \u226519):\n      \u2022 `9ad9f8bb7a13` \u2014 22 parts at 2026-05-23 17:55\n      \u2022 `ce61506b7536` \u2014 21 parts at 2026-05-23 20:24"
        ],
        "failures": {
          "Commercial/2W/3W": 3
        },
        "buckets": {
          "0-3 min": 50,
          "4-5 min": 61,
          "6-10 min": 10,
          ">10 min": 0
        },
        "da_time": 24.5,
        "da_bot_time": 1.512
      },
      "rsi_pi": {
        "cases": 53,
        "completed": 44,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [],
        "failures": {},
        "buckets": {
          "0-3 min": 18,
          "4-5 min": 30,
          "6-10 min": 5,
          ">10 min": 0
        },
        "da_time": 20.0,
        "da_bot_time": 1.306
      },
      "tata_aig_pi": {
        "cases": 187,
        "completed": 183,
        "failed": 4,
        "failure_rate_pct": 2.14,
        "warnings": [
          "High-damage case(s) (avg today 6.3 parts/claim, flagged \u226518):\n      \u2022 `f09fd81fdfe0` \u2014 22 parts at 2026-05-23 13:02\n      \u2022 `23e8faad0b85` \u2014 21 parts at 2026-05-23 15:32"
        ],
        "failures": {
          "Irrelevant/Inappropriate images.": 4
        },
        "buckets": {
          "0-3 min": 61,
          "4-5 min": 84,
          "6-10 min": 10,
          ">10 min": 0
        },
        "da_time": 26.0,
        "da_bot_time": 1.5739999999999998
      },
      "zurich_claims": {
        "cases": 75,
        "completed": 69,
        "failed": 6,
        "failure_rate_pct": 8.0,
        "warnings": [],
        "failures": {
          "Commercial/2W/3W": 2,
          "Irrelevant/Inappropriate images.": 2,
          "Car images are inverted.": 1,
          "Different car images.": 1
        },
        "buckets": {
          "0-3 min": 38,
          "4-5 min": 18,
          "6-10 min": 4,
          ">10 min": 0
        },
        "da_time": 29.0,
        "da_bot_time": 1.3499999999999999
      },
      "zurich_pi": {
        "cases": 9,
        "completed": 9,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [],
        "failures": {},
        "buckets": {
          "0-3 min": 5,
          "4-5 min": 2,
          "6-10 min": 2,
          ">10 min": 0
        },
        "da_time": 20.0,
        "da_bot_time": 1.218
      }
    }
  },
  "2026-05-25": {
    "date": "2026-05-25",
    "totals": {
      "cases": 17204,
      "failed": 638,
      "warnings": 4,
      "failure_rate_pct": 3.71
    },
    "summary": [
      {
        "customer": "HDFC ERGO",
        "region": "India",
        "claims_mtd": 20378,
        "pi_mtd": 3234,
        "total_mtd": 23612,
        "prev_month_same_period": 24447,
        "avg_per_day": 983,
        "fy_total": 52899
      },
      {
        "customer": "BAGIC",
        "region": "India",
        "claims_mtd": 18175,
        "pi_mtd": 0,
        "total_mtd": 18175,
        "prev_month_same_period": 23908,
        "avg_per_day": 757,
        "fy_total": 46019
      },
      {
        "customer": "RSGI",
        "region": "India",
        "claims_mtd": 3891,
        "pi_mtd": 1055,
        "total_mtd": 4946,
        "prev_month_same_period": 2876,
        "avg_per_day": 206,
        "fy_total": 8980
      },
      {
        "customer": "Tata AIG",
        "region": "India",
        "claims_mtd": 0,
        "pi_mtd": 4524,
        "total_mtd": 4524,
        "prev_month_same_period": 5114,
        "avg_per_day": 188,
        "fy_total": 10818
      },
      {
        "customer": "Zurich",
        "region": "SEA",
        "claims_mtd": 2673,
        "pi_mtd": 231,
        "total_mtd": 2904,
        "prev_month_same_period": 3448,
        "avg_per_day": 121,
        "fy_total": 7127
      },
      {
        "customer": "QuickInSure",
        "region": "India",
        "claims_mtd": 0,
        "pi_mtd": 1728,
        "total_mtd": 1728,
        "prev_month_same_period": 1878,
        "avg_per_day": 72,
        "fy_total": 4060
      }
    ],
    "clients": {
      "bagic_claims": {
        "cases": 5332,
        "completed": 5191,
        "failed": 141,
        "failure_rate_pct": 2.64,
        "warnings": [
          "High-damage case(s) (avg today 7.7 parts/claim, flagged \u226524):\n      \u2022 `db185f78d071` \u2014 34 parts at 2026-05-24 15:14"
        ],
        "failures": {
          "Inverted Images": 134,
          "Could not identify minimum requirements of images": 3,
          "Different car images.": 2,
          "Commercial/2W/3W": 1,
          "Invalid images": 1
        },
        "buckets": {
          "0-3 min": 1689,
          "4-5 min": 1309,
          "6-10 min": 949,
          ">10 min": 314
        },
        "da_time": 231.5,
        "da_bot_time": 11.863999999999999
      },
      "hdfc_breakin": {
        "cases": 946,
        "completed": 945,
        "failed": 1,
        "failure_rate_pct": 0.11,
        "warnings": [
          "High-damage case(s) (avg today 4.8 parts/claim, flagged \u226515):\n      \u2022 `b45344cb68ff` \u2014 16 parts at 2026-05-24 12:00",
          "Webhook acceptance dropped: 82.3% vs baseline 92.6% (\u221210.3 pp)."
        ],
        "failures": {
          "Could not identify minimum required car images.": 1
        },
        "buckets": {
          "0-3 min": 417,
          "4-5 min": 272,
          "6-10 min": 53,
          ">10 min": 7
        },
        "da_time": 21.5,
        "da_bot_time": 3.092
      },
      "hdfc_claims": {
        "cases": 6412,
        "completed": 6072,
        "failed": 340,
        "failure_rate_pct": 5.3,
        "warnings": [
          "Failure rate spike: 17.0% (10/59) vs 30-day baseline 5.3% (\u0394=+11.7 pp)."
        ],
        "failures": {
          "Could not identify minimum required car images.": 145,
          "Commercial/2W/3W": 102,
          "Irrelevant/Inappropriate images.": 84,
          "Different car images.": 9
        },
        "buckets": {
          "0-3 min": 2533,
          "4-5 min": 2295,
          "6-10 min": 98,
          ">10 min": 54
        },
        "da_time": 530.0,
        "da_bot_time": 14.024
      },
      "quickinsure": {
        "cases": 499,
        "completed": 492,
        "failed": 7,
        "failure_rate_pct": 1.4,
        "warnings": [],
        "failures": {
          "More than miximum requirments of images": 6,
          "Could not identify minimun requirments of images": 1
        },
        "buckets": {
          "0-3 min": 0,
          "4-5 min": 0,
          "6-10 min": 0,
          ">10 min": 0
        },
        "da_time": 30.5,
        "da_bot_time": 2.198
      },
      "rsi_claims": {
        "cases": 1330,
        "completed": 1326,
        "failed": 4,
        "failure_rate_pct": 0.3,
        "warnings": [],
        "failures": {
          "Commercial/2W/3W": 4
        },
        "buckets": {
          "0-3 min": 423,
          "4-5 min": 472,
          "6-10 min": 105,
          ">10 min": 41
        },
        "da_time": 26.0,
        "da_bot_time": 3.8600000000000003
      },
      "rsi_pi": {
        "cases": 367,
        "completed": 324,
        "failed": 0,
        "failure_rate_pct": 0.0,
        "warnings": [],
        "failures": {},
        "buckets": {
          "0-3 min": 116,
          "4-5 min": 203,
          "6-10 min": 40,
          ">10 min": 8
        },
        "da_time": 20.0,
        "da_bot_time": 1.934
      },
      "tata_aig_pi": {
        "cases": 1386,
        "completed": 1369,
        "failed": 17,
        "failure_rate_pct": 1.23,
        "warnings": [],
        "failures": {
          "Irrelevant/Inappropriate images.": 16,
          "Could not identify minimum required car images.": 1
        },
        "buckets": {
          "0-3 min": 318,
          "4-5 min": 635,
          "6-10 min": 59,
          ">10 min": 0
        },
        "da_time": 45.5,
        "da_bot_time": 3.9720000000000004
      },
      "zurich_claims": {
        "cases": 862,
        "completed": 736,
        "failed": 126,
        "failure_rate_pct": 14.62,
        "warnings": [],
        "failures": {
          "Irrelevant/Inappropriate images.": 82,
          "Could not identify minimun requirments of images": 31,
          "Commercial/2W/3W": 8,
          "Car images are inverted.": 3,
          "Different car images.": 2
        },
        "buckets": {
          "0-3 min": 411,
          "4-5 min": 186,
          "6-10 min": 59,
          ">10 min": 7
        },
        "da_time": 209.0,
        "da_bot_time": 2.924
      },
      "zurich_pi": {
        "cases": 70,
        "completed": 68,
        "failed": 2,
        "failure_rate_pct": 2.86,
        "warnings": [],
        "failures": {
          "Commercial/2W/3W": 2
        },
        "buckets": {
          "0-3 min": 49,
          "4-5 min": 13,
          "6-10 min": 4,
          ">10 min": 4
        },
        "da_time": 23.0,
        "da_bot_time": 1.3399999999999999
      }
    }
  }
};

// ── STATE VARIABLES ──────────────────────────────────────────────────────── */
let activeTab = 'summary';
let activeDataset = JSON.parse(JSON.stringify(HISTORICAL_BRIEFS));
let currentBriefDate = '2026-05-25';
let timeChartInstance = null;
let failureChartInstance = null;
let volumeTrendChartInstance = null;

// Client Display Names and Icons
const CLIENT_META = {
  "bagic_claims": { name: "BAGIC Claims", icon: "fa-car-burst" },
  "hdfc_breakin": { name: "HDFC Break-in (PI)", icon: "fa-car-side" },
  "hdfc_claims": { name: "HDFC Claims", icon: "fa-shield-halved" },
  "quickinsure": { name: "QuickInsure", icon: "fa-handshake" },
  "rsi_claims": { name: "Royal Sundaram Claims", icon: "fa-circle-dollar-to-slot" },
  "rsi_pi": { name: "Royal Sundaram PI", icon: "fa-clipboard-check" },
  "tata_aig_pi": { name: "Tata AIG PI", icon: "fa-clipboard-list" },
  "zurich_claims": { name: "Zurich Indonesia Claims", icon: "fa-plane-departure" },
  "zurich_pi": { name: "Zurich Indonesia PI", icon: "fa-building-columns" }
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  bindUIEvents();
  
  // Dynamically initialize date selector boundaries to show the latest single day by default
  const sortedDates = Object.keys(HISTORICAL_BRIEFS).sort();
  if (sortedDates.length > 0) {
    const latestDate = sortedDates[sortedDates.length - 1];
    document.getElementById('startDate').value = latestDate;
    document.getElementById('endDate').value = latestDate;
  }
  
  applyDateFilter();
});

// Theme Management
function initTheme() {
  const theme = localStorage.getItem('camcom-theme') || 'dark';
  if (theme === 'light') {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    document.getElementById('themeToggleBtn').innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    document.getElementById('themeToggleBtn').innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

function toggleTheme() {
  if (document.body.classList.contains('dark-theme')) {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    document.getElementById('themeToggleBtn').innerHTML = '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem('camcom-theme', 'light');
  } else {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    document.getElementById('themeToggleBtn').innerHTML = '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem('camcom-theme', 'dark');
  }
  renderCharts();
}

// Bind Actions
function bindUIEvents() {
  // Tab click triggers
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      tabButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      activeTab = e.target.getAttribute('data-tab');
      renderDashboard();
    });
  });

  // Filter Trigger
  document.getElementById('filterBtn').addEventListener('click', applyDateFilter);

  // File Upload Handling
  document.getElementById('jsonUploader').addEventListener('change', handleFileUpload);

  // Global CSV Export
  document.getElementById('exportCsvBtn').addEventListener('click', exportGlobalCsv);

  // Theme Toggle click
  document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);

  // Table Export click
  document.getElementById('exportTableBtn').addEventListener('click', () => {
    exportTableToCSV(activeTab + '_ledger_export.csv');
  });

  // Floating Dropdown Action Menu toggles
  document.addEventListener('click', (e) => {
    const dotsBtn = e.target.closest('.btn-dots');
    if (dotsBtn) {
      e.stopPropagation();
      const container = dotsBtn.closest('.dropdown-container');
      const shouldShow = !container.classList.contains('show');
      
      // Close all dropdowns
      document.querySelectorAll('.dropdown-container').forEach(c => {
        c.classList.remove('show');
      });
      
      if (shouldShow) {
        container.classList.add('show');
      }
    } else {
      // Close all dropdowns
      document.querySelectorAll('.dropdown-container').forEach(c => {
        c.classList.remove('show');
      });
    }
  });
}

// ── DATA ENGINE & FILTERS ─────────────────────────────────────────────────── */
function applyDateFilter() {
  const start = document.getElementById('startDate').value;
  const end = document.getElementById('endDate').value;
  
  if (!start || !end || start > end) {
    alert("Please select a valid date range.");
    return;
  }

  const filtered = {};
  Object.keys(HISTORICAL_BRIEFS).forEach(d => {
    if (d >= start && d <= end) {
      filtered[d] = JSON.parse(JSON.stringify(HISTORICAL_BRIEFS[d]));
    }
  });

  if (Object.keys(filtered).length === 0) {
    alert("No data available in this date range.");
    return;
  }

  activeDataset = filtered;
  const sortedDates = Object.keys(filtered).sort();
  currentBriefDate = sortedDates[sortedDates.length - 1];
  
  renderDashboard();
}

function handleFileUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const parsed = JSON.parse(evt.target.result);
      if (parsed.date && parsed.data) {
        const fileDate = parsed.date;
        HISTORICAL_BRIEFS[fileDate] = {
          date: fileDate,
          totals: parsed.data.totals,
          summary: parsed.data.summary.rows,
          clients: {}
        };
        
        parsed.data.clients.forEach(cl => {
          const nameLower = cl.name.toLowerCase().replace(' ', '_').replace('-', '_').replace('(', '').replace(')', '');
          const warningsArray = cl.warnings ? cl.warnings.map(w => w.message) : [];
          
          const failMap = {};
          if (cl.top_failure_reasons) {
            cl.top_failure_reasons.forEach(fr => {
              if (fr.length === 2) failMap[fr[0]] = fr[1];
            });
          }

          const bucketsMap = {};
          if (cl.processing_time_buckets) {
            cl.processing_time_buckets.forEach(b => {
              if (b.length === 2) bucketsMap[b[0]] = b[1];
            });
          }

          HISTORICAL_BRIEFS[fileDate].clients[nameLower] = {
            cases: cl.summary.cases,
            completed: cl.summary.completed,
            failed: cl.summary.failed,
            failure_rate_pct: cl.summary.failure_rate_pct,
            warnings: warningsArray,
            failures: failMap,
            buckets: bucketsMap,
            da_time: cl.da_time || (20.0 + (cl.summary.failed * 1.5)),
            da_bot_time: cl.da_bot_time || (1.2 + (cl.summary.cases * 0.002))
          };
        });

        alert(`Successfully imported brief for date: ${fileDate}`);
        activeDataset = JSON.parse(JSON.stringify(HISTORICAL_BRIEFS));
        currentBriefDate = fileDate;
        renderDashboard();
      } else {
        alert("Invalid file format.");
      }
    } catch(err) {
      alert("Error parsing JSON: " + err.message);
    }
  };
  reader.readAsText(file);
}

// ── RENDER ENGINE ─────────────────────────────────────────────────────────── */
function renderDashboard() {
  const brief = activeDataset[currentBriefDate];
  if (!brief) return;

  const dashboardContentLayout = document.getElementById('dashboardContentLayout');
  const metricsGrid = document.getElementById('metricsGrid');
  const warningsPanel = document.getElementById('warningsPanel');
  const pilotPanel = document.getElementById('pilotPanel');
  const timeChartCard = document.getElementById('timeChartCard');
  const failureChartCard = document.getElementById('failureChartCard');
  const volumeTrendChartCard = document.getElementById('volumeTrendChartCard');

  dashboardContentLayout.style.display = "grid";
  metricsGrid.style.display = "grid";
  warningsPanel.style.display = "block";
  pilotPanel.style.display = "none";
  timeChartCard.style.display = "block";
  failureChartCard.style.display = "block";
  volumeTrendChartCard.style.display = "block";

  if (activeTab === 'summary') {
    renderSummaryTab(brief);
  } else if (activeTab === 'pivot') {
    renderPivotTab(brief);
  } else if (activeTab === 'magma') {
    renderMagmaPilotTab(brief);
  } else {
    renderClientSpecificTab(brief, activeTab);
  }

  // Update strategic advisory suggestions on every switch
  updateAdvisoryInsights(brief, activeTab);
}

// 1. Summary Rendering
function renderSummaryTab(brief) {
  let aggregatedVolume = 0;
  let aggregatedFailed = 0;
  let aggregatedWarnings = 0;

  Object.keys(activeDataset).forEach(d => {
    const b = activeDataset[d];
    aggregatedVolume += b.totals.cases;
    aggregatedFailed += b.totals.failed;
    aggregatedWarnings += b.totals.warnings;
  });

  const avgFailRate = aggregatedVolume > 0 ? (aggregatedFailed / aggregatedVolume * 100).toFixed(2) : "0.00";
  const autoRate = aggregatedVolume > 0 ? ((aggregatedVolume - aggregatedFailed) / aggregatedVolume * 100).toFixed(2) : "100.00";

  document.getElementById('metricVolume').textContent = aggregatedVolume.toLocaleString();
  document.getElementById('metricCompleted').textContent = (aggregatedVolume - aggregatedFailed).toLocaleString();
  document.getElementById('automationRate').textContent = `${autoRate}% Auto-Rate (Range)`;
  
  document.getElementById('metricFailed').textContent = aggregatedFailed.toLocaleString();
  document.getElementById('failureRate').textContent = `${avgFailRate}% Failure Rate (Range)`;
  
  document.getElementById('metricWarnings').textContent = aggregatedWarnings;
  document.getElementById('warningScope').textContent = "HIL High Damage Alerts";

  // Build Anomaly Warnings List
  const warningsList = document.getElementById('warningsList');
  warningsList.innerHTML = '';
  
  let totalWarningsCount = 0;
  Object.keys(brief.clients).forEach(key => {
    const cl = brief.clients[key];
    if (cl.warnings && cl.warnings.length > 0) {
      cl.warnings.forEach(w => {
        totalWarningsCount++;
        const item = document.createElement('div');
        item.className = 'warning-item';
        item.innerHTML = `
          <div class="warning-item-header"><i class="fa-solid fa-triangle-exclamation text-orange"></i> ${CLIENT_META[key] ? CLIENT_META[key].name : key}</div>
          <div class="warning-item-body">${w}</div>
        `;
        warningsList.appendChild(item);
      });
    }
  });

  if (totalWarningsCount === 0) {
    warningsList.innerHTML = '<p class="text-secondary font-small">No warning triggers flagged for today\'s volume.</p>';
  }

  // Load Table headers & rows
  const tableHeaders = document.getElementById('tableHeaders');
  tableHeaders.innerHTML = `
    <th>Customer</th>
    <th>Region</th>
    <th>Claims MTD</th>
    <th>PI MTD</th>
    <th>Total MTD</th>
    <th>FY Total</th>
    <th>Avg/Day</th>
  `;

  const tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = '';
  
  brief.summary.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${row.customer}</strong></td>
      <td>${row.region}</td>
      <td class="text-right">${row.claims_mtd.toLocaleString()}</td>
      <td class="text-right">${row.pi_mtd.toLocaleString()}</td>
      <td class="text-right"><strong>${row.total_mtd.toLocaleString()}</strong></td>
      <td class="text-right">${row.fy_total.toLocaleString()}</td>
      <td class="text-right">${row.avg_per_day.toLocaleString()}</td>
    `;
    tableBody.appendChild(tr);
  });

  renderCharts();
}

// 2. Pivot Rendering
function renderPivotTab(brief) {
  document.getElementById('warningsPanel').style.display = "none";
  document.getElementById('timeChartCard').style.display = "none";
  document.getElementById('failureChartCard').style.display = "none";
  document.getElementById('volumeTrendChartCard').style.display = "none";
  document.getElementById('dashboardContentLayout').style.display = "block";

  let mtdTotal = 0;
  let mtdClaims = 0;
  let mtdPI = 0;
  brief.summary.forEach(row => {
    mtdTotal += row.total_mtd;
    mtdClaims += row.claims_mtd;
    mtdPI += row.pi_mtd;
  });

  document.getElementById('metricVolume').textContent = mtdTotal.toLocaleString();
  document.getElementById('metricCompleted').textContent = mtdClaims.toLocaleString();
  document.getElementById('automationRate').textContent = "Total MTD Claims";
  document.getElementById('metricFailed').textContent = mtdPI.toLocaleString();
  document.getElementById('failureRate').textContent = "Total MTD Pre-Inspections";
  document.getElementById('metricWarnings').textContent = brief.summary.length;
  document.getElementById('warningScope').textContent = "Enterprise Accounts Active";

  // Build historical pivot table
  const tableHeaders = document.getElementById('tableHeaders');
  tableHeaders.innerHTML = `
    <th>Date</th>
    <th>Use Case</th>
    <th>HDFC ERGO</th>
    <th>BAGIC</th>
    <th>Tata AIG</th>
    <th>RSGI</th>
    <th>Zurich</th>
    <th>QuickInSure</th>
    <th>Daily Total</th>
  `;

  const tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = '';

  const sortedDates = Object.keys(activeDataset).sort();
  sortedDates.forEach(d => {
    const briefAtDate = activeDataset[d];
    
    // Add Claims Row
    const trClaims = document.createElement('tr');
    let hdfcClaimsVal = briefAtDate.clients["hdfc_claims"] ? briefAtDate.clients["hdfc_claims"].cases : 0;
    let bagicClaimsVal = briefAtDate.clients["bagic_claims"] ? briefAtDate.clients["bagic_claims"].cases : 0;
    let rsiClaimsVal = briefAtDate.clients["rsi_claims"] ? briefAtDate.clients["rsi_claims"].cases : 0;
    let zurichClaimsVal = briefAtDate.clients["zurich_claims"] ? briefAtDate.clients["zurich_claims"].cases : 0;
    let claimsSum = hdfcClaimsVal + bagicClaimsVal + rsiClaimsVal + zurichClaimsVal;

    trClaims.innerHTML = `
      <td>${d}</td>
      <td><span class="status-pill pill-completed">Claims</span></td>
      <td class="text-right">${hdfcClaimsVal}</td>
      <td class="text-right">${bagicClaimsVal}</td>
      <td class="text-right">0</td>
      <td class="text-right">${rsiClaimsVal}</td>
      <td class="text-right">${zurichClaimsVal}</td>
      <td class="text-right">0</td>
      <td class="text-right"><strong>${claimsSum}</strong></td>
    `;
    tableBody.appendChild(trClaims);

    // Add PI Row
    const trPI = document.createElement('tr');
    let hdfcBreakinVal = briefAtDate.clients["hdfc_breakin"] ? briefAtDate.clients["hdfc_breakin"].cases : 0;
    let quickInsureVal = briefAtDate.clients["quickinsure"] ? briefAtDate.clients["quickinsure"].cases : 0;
    let rsiPIVal = briefAtDate.clients["rsi_pi"] ? briefAtDate.clients["rsi_pi"].cases : 0;
    let tataAigPIVal = briefAtDate.clients["tata_aig_pi"] ? briefAtDate.clients["tata_aig_pi"].cases : 0;
    let zurichPIVal = briefAtDate.clients["zurich_pi"] ? briefAtDate.clients["zurich_pi"].cases : 0;
    let piSum = hdfcBreakinVal + quickInsureVal + rsiPIVal + tataAigPIVal + zurichPIVal;

    trPI.innerHTML = `
      <td>${d}</td>
      <td><span class="status-pill pill-failed">Pre-Insp</span></td>
      <td class="text-right">${hdfcBreakinVal}</td>
      <td class="text-right">0</td>
      <td class="text-right">${tataAigPIVal}</td>
      <td class="text-right">${rsiPIVal}</td>
      <td class="text-right">${zurichPIVal}</td>
      <td class="text-right">${quickInsureVal}</td>
      <td class="text-right"><strong>${piSum}</strong></td>
    `;
    tableBody.appendChild(trPI);
  });
}

// 3. Magma Pilot Rendering
function renderMagmaPilotTab(brief) {
  document.getElementById('warningsPanel').style.display = "none";
  document.getElementById('failureChartCard').style.display = "none";
  document.getElementById('pilotPanel').style.display = "block";

  // KPIs
  document.getElementById('metricVolume').textContent = "500";
  document.getElementById('metricCompleted').textContent = "480";
  document.getElementById('automationRate').textContent = "96.0% SLA Target";
  document.getElementById('metricFailed').textContent = "20";
  document.getElementById('failureRate').textContent = "4.0% Pilot Error Rate";
  document.getElementById('metricWarnings').textContent = "Active";
  document.getElementById('warningScope').textContent = "POC Metrics Established";

  // Timeline & diagnostic sandbox tables
  const tableHeaders = document.getElementById('tableHeaders');
  tableHeaders.innerHTML = `
    <th>Phase</th>
    <th>Start Date</th>
    <th>Target Conversion</th>
    <th>Success Threshold</th>
    <th>Observed Accuracy</th>
    <th>SLA Response</th>
  `;

  const tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = `
    <tr>
      <td><strong>Phase 1: Integration</strong></td>
      <td>2026-05-01</td>
      <td>H1 FY2026-27</td>
      <td>95.0% Webhooks</td>
      <td>99.2% Webhooks</td>
      <td><span class="status-pill pill-completed">Passed</span></td>
    </tr>
    <tr>
      <td><strong>Phase 2: Part Detection</strong></td>
      <td>2026-05-10</td>
      <td>H1 FY2026-27</td>
      <td>&ge;85.0% Precision/Recall</td>
      <td>88.6% Precision / 86.4% Recall</td>
      <td><span class="status-pill pill-completed">Passed</span></td>
    </tr>
    <tr>
      <td><strong>Phase 3: Decision Model</strong></td>
      <td>2026-05-18</td>
      <td>H2 FY2026-27</td>
      <td>&ge;82.0% Precision/Recall</td>
      <td>80.5% Precision / 81.1% Recall</td>
      <td><span class="status-pill pill-failed">Reviewing</span></td>
    </tr>
  `;

  renderCharts();
}

// 4. Client-Specific Tab Rendering
function renderClientSpecificTab(brief, key) {
  let aggregatedVolume = 0;
  let aggregatedFailed = 0;
  let warningsCount = 0;

  Object.keys(activeDataset).forEach(d => {
    const b = activeDataset[d];
    const clData = b.clients[key];
    if (clData) {
      aggregatedVolume += clData.cases;
      aggregatedFailed += clData.failed;
      warningsCount += clData.warnings.length;
    }
  });

  const autoRate = aggregatedVolume > 0 ? (((aggregatedVolume - aggregatedFailed) / aggregatedVolume) * 100).toFixed(2) : "100.00";
  const failRate = aggregatedVolume > 0 ? ((aggregatedFailed / aggregatedVolume) * 100).toFixed(2) : "0.00";

  document.getElementById('metricVolume').textContent = aggregatedVolume.toLocaleString();
  document.getElementById('metricCompleted').textContent = (aggregatedVolume - aggregatedFailed).toLocaleString();
  document.getElementById('automationRate').textContent = `${autoRate}% Auto-Rate (Range)`;
  
  document.getElementById('metricFailed').textContent = aggregatedFailed.toLocaleString();
  document.getElementById('failureRate').textContent = `${failRate}% Failure Rate (Range)`;
  
  document.getElementById('metricWarnings').textContent = warningsCount;
  document.getElementById('warningScope').textContent = warningsCount > 0 ? "High Damage Alerts Flagged" : "No warnings";

  // Build Client Warnings
  const warningsList = document.getElementById('warningsList');
  warningsList.innerHTML = '';
  
  const cl = brief.clients[key];
  if (cl && cl.warnings && cl.warnings.length > 0) {
    cl.warnings.forEach(w => {
      const item = document.createElement('div');
      item.className = 'warning-item';
      item.innerHTML = `
        <div class="warning-item-header"><i class="fa-solid fa-triangle-exclamation text-orange"></i> Anomaly Alert</div>
        <div class="warning-item-body">${w}</div>
      `;
      warningsList.appendChild(item);
    });
  } else {
    warningsList.innerHTML = '<p class="text-secondary font-small">No warning triggers flagged for this client instance.</p>';
  }

  // Build Incident Sandbox Table Rows
  const tableHeaders = document.getElementById('tableHeaders');
  tableHeaders.innerHTML = `
    <th>Date</th>
    <th>Metric Type</th>
    <th>Cases Processed</th>
    <th>Completed</th>
    <th>Failed</th>
    <th>Failure Rate %</th>
    <th>Avg. Execution Time</th>
  `;

  const tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = '';

  const sortedDates = Object.keys(activeDataset).sort();
  sortedDates.forEach(d => {
    const briefAtDate = activeDataset[d];
    const clDataAtDate = briefAtDate.clients[key];
    if (clDataAtDate) {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${d}</td>
        <td><strong>Inspections SLA</strong></td>
        <td class="text-right">${clDataAtDate.cases}</td>
        <td class="text-right">${clDataAtDate.completed}</td>
        <td class="text-right">${clDataAtDate.failed}</td>
        <td class="text-right">${clDataAtDate.failure_rate_pct}%</td>
        <td class="text-right">${clDataAtDate.da_bot_time.toFixed(2)} min</td>
      `;
      tableBody.appendChild(tr);
    }
  });

  renderCharts();
}

// ── ADVISORY INSIGHTS ENGINE ──────────────────────────────────────────────── */
function updateAdvisoryInsights(brief, tab) {
  const container = document.getElementById('insightsContent');
  container.innerHTML = '';

  // Helper to get total cases, failed, and failures map for a client
  function getClientStats(clientKey) {
    let cases = 0;
    let failed = 0;
    const failures = {};
    Object.keys(activeDataset).forEach(d => {
      const b = activeDataset[d];
      const cl = b.clients[clientKey];
      if (cl) {
        cases += cl.cases;
        failed += cl.failed;
        Object.keys(cl.failures).forEach(fkey => {
          failures[fkey] = (failures[fkey] || 0) + cl.failures[fkey];
        });
      }
    });
    const failRate = cases > 0 ? (failed / cases * 100).toFixed(2) : "0.00";
    return { cases, failed, failRate, failures };
  }

  const zurichStats = getClientStats('zurich_claims');
  const bagicStats = getClientStats('bagic_claims');
  const hdfcStats = getClientStats('hdfc_claims');
  const rsiStats = getClientStats('rsi_claims');

  const zurichIrr = zurichStats.failures["Irrelevant/Inappropriate images."] || 0;
  const zurichMin = zurichStats.failures["Could not identify minimun requirments of images"] || zurichStats.failures["Could not identify minimum required car images."] || 0;

  const bagicInv = bagicStats.failures["Inverted Images"] || 0;
  const bagicInvPct = bagicStats.failed > 0 ? (bagicInv / bagicStats.failed * 100).toFixed(1) : "0.0";

  const hdfcMin = hdfcStats.failures["Could not identify minimum required car images."] || 0;
  const hdfcComm = hdfcStats.failures["Commercial/2W/3W"] || 0;

  const insightData = {
    "summary": [
      {
        header: "Zurich Indonesia Claims Risk",
        body: `Selected range failure rate stands at **${zurichStats.failRate}%** (target <5.00%). Primary drivers are irrelevant images (**${zurichIrr} cases**) and insufficient angles (**${zurichMin} cases**).`,
        suggest: "Enforce camera capture guidance overlay in the adjuster application UI."
      },
      {
        header: "BAGIC Claims Inverted Images",
        body: `BAGIC Claims logged **${bagicStats.failRate}%** failure rate. A significant **${bagicInvPct}%** of failures (**${bagicInv} out of ${bagicStats.failed}**) are triggered by inverted photos uploaded by adjusters.`,
        suggest: "Deploy the automated EXIF orientation corrector on the image ingestion webhook."
      },
      {
        header: "HDFC Claims SLA Volatility",
        body: `Overall failure rate stands at **${hdfcStats.failRate}%**, driven primarily by missing perimeter photos (**${hdfcMin} cases**) and inappropriate Commercial/2W/3W vehicles (**${hdfcComm} cases**).`,
        suggest: "Pre-filter commercial registration numbers, or route them to a dedicated CV model pipeline."
      }
    ],
    "bagic_claims": [
      {
        header: "Orientation Mismatch Alert",
        body: `A massive **${bagicInvPct}%** of failed cases on this instance (**${bagicInv} cases**) are triggered by upside-down or landscape-flipped images uploaded by adjusters.`,
        suggest: "Integrate automatic EXIF image-orientation rotation check in the camera module."
      }
    ],
    "hdfc_claims": [
      {
        header: "Image Capture Quality Leakage",
        body: `Missing minimum required panel photos (**${hdfcMin} cases**) and non-passenger Commercial/2W/3W vehicles (**${hdfcComm} cases**) skew part detection recall.`,
        suggest: "Enforce 8-perimeter photo validation locks in the next claimant application release."
      }
    ],
    "zurich_claims": [
      {
        header: "High Operational Failures Risk",
        body: `Zurich Claims logged a severe failure rate of **${zurichStats.failRate}%** over the selected range, driven by irrelevant uploads (**${zurichIrr} cases**) and missing angles (**${zurichMin} cases**).`,
        suggest: "Mandate real-time visual-perimeter checks before allowing adjusters to submit claims."
      }
    ],
    "rsi_claims": [
      {
        header: "World-Class STP Efficiency",
        body: `Royal Sundaram Claims exhibits exceptional operations with an average failure rate of just **${rsiStats.failRate}%** across **${rsiStats.cases.toLocaleString()} cases** in this range.`,
        suggest: "Operations are highly optimized. Continue monitoring straight-through processing rates."
      }
    ]
  };

  const activeInsights = insightData[tab] || [
    {
      header: "Operational Performance Active",
      body: `Baseline performance registered successfully for ${CLIENT_META[tab] ? CLIENT_META[tab].name : tab} across the selected range.`,
      suggest: "Govern cycle times and SLA thresholds on a weekly basis."
    }
  ];

  activeInsights.forEach(ins => {
    const div = document.createElement('div');
    div.className = 'insight-item';
    div.innerHTML = `
      <div class="insight-item-header">${ins.header}</div>
      <div class="insight-item-body">${ins.body}</div>
      <div class="insight-suggestion">
        <span class="insight-suggestion-label"><i class="fa-solid fa-circle-nodes"></i> Suggestion:</span>
        <span>${ins.suggest}</span>
      </div>
    `;
    container.appendChild(div);
  });
}

// ── CHART GENERATION AND OVERLAY ──────────────────────────────────────────── */
function renderCharts() {
  const isDark = document.body.classList.contains('dark-theme');
  const textColor = isDark ? '#94a3b8' : '#475569';
  const gridColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';

  if (timeChartInstance) timeChartInstance.destroy();
  if (failureChartInstance) failureChartInstance.destroy();
  if (volumeTrendChartInstance) volumeTrendChartInstance.destroy();

  const brief = activeDataset[currentBriefDate];
  if (!brief) return;

  const ctxTime = document.getElementById('timeChart').getContext('2d');
  const ctxFailure = document.getElementById('failureChart').getContext('2d');
  const ctxVolume = document.getElementById('volumeTrendChart').getContext('2d');

  // Retrieve Chronological Dates sorted
  const sortedDates = Object.keys(activeDataset).sort();

  // Draw Line Chart 3: Volume Trend
  const volumes = sortedDates.map(d => {
    const b = activeDataset[d];
    if (activeTab === 'summary') {
      return b.totals.cases;
    } else if (activeTab === 'magma') {
      return 500;
    } else {
      return b.clients[activeTab] ? b.clients[activeTab].cases : 0;
    }
  });

  volumeTrendChartInstance = new Chart(ctxVolume, {
    type: 'line',
    data: {
      labels: sortedDates,
      datasets: [{
        label: 'Daily Inspections Volume',
        data: volumes,
        borderColor: '#2563eb',
        backgroundColor: 'rgba(37, 99, 235, 0.1)',
        fill: true,
        tension: 0.35,
        pointBackgroundColor: '#2563eb',
        pointBorderColor: isDark ? '#060913' : '#ffffff',
        pointRadius: 5,
        pointHoverRadius: 7
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: gridColor }, ticks: { color: textColor, font: { family: 'Neue Montreal', size: 10 } } },
        y: { grid: { color: gridColor }, ticks: { color: textColor, font: { family: 'Neue Montreal' } } }
      }
    }
  });

  if (activeTab === 'summary' || activeTab === 'magma') {
    // 1. Bar Chart: aggregate HIL buckets & DA Bot
    let b03 = 0, b45 = 0, b610 = 0, b10 = 0, bBot = 0;
    
    Object.keys(activeDataset).forEach(d => {
      const b = activeDataset[d];
      Object.keys(b.clients).forEach(key => {
        const cl = b.clients[key];
        b03 += cl.buckets ? (cl.buckets["0-3 min"] || 0) : 0;
        b45 += cl.buckets ? (cl.buckets["4-5 min"] || 0) : 0;
        b610 += cl.buckets ? (cl.buckets["6-10 min"] || 0) : 0;
        b10 += cl.buckets ? (cl.buckets[">10 min"] || 0) : 0;
        bBot += cl.completed;
      });
    });

    timeChartInstance = new Chart(ctxTime, {
      type: 'bar',
      data: {
        labels: ['0-3 min', '4-5 min', '6-10 min', '>10 min', 'DA Bot'],
        datasets: [{
          data: [b03, b45, b610, b10, bBot],
          backgroundColor: ['#10b981', '#f97316', '#ef4444', '#94a3b8', '#e01e26'],
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: gridColor }, ticks: { color: textColor, font: { family: 'Neue Montreal' } } },
          y: { grid: { color: gridColor }, ticks: { color: textColor, font: { family: 'Neue Montreal' } } }
        }
      }
    });

    // 2. Failure doughnut chart: aggregate failures
    const failLabelMap = {};
    Object.keys(activeDataset).forEach(d => {
      const b = activeDataset[d];
      Object.keys(b.clients).forEach(key => {
        const cl = b.clients[key];
        Object.keys(cl.failures).forEach(fkey => {
          failLabelMap[fkey] = (failLabelMap[fkey] || 0) + cl.failures[fkey];
        });
      });
    });

    const fLabels = Object.keys(failLabelMap);
    const fValues = Object.values(failLabelMap);

    failureChartInstance = new Chart(ctxFailure, {
      type: 'doughnut',
      data: {
        labels: fLabels.length > 0 ? fLabels : ['SLA Perfect'],
        datasets: [{
          data: fValues.length > 0 ? fValues : [100],
          backgroundColor: ['#e01e26', '#f97316', '#06b6d4', '#10b981', '#6366f1', '#e2e8f0'],
          borderWidth: 1,
          borderColor: isDark ? '#0b1120' : '#ffffff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'right', labels: { color: textColor, font: { family: 'Neue Montreal', size: 10 } } }
        }
      }
    });

  } else {
    // Client specific graphs with aggregated range data
    let b03 = 0, b45 = 0, b610 = 0, b10 = 0, bBot = 0;
    const failuresMap = {};

    Object.keys(activeDataset).forEach(d => {
      const b = activeDataset[d];
      const cl = b.clients[activeTab];
      if (cl) {
        b03 += cl.buckets ? (cl.buckets["0-3 min"] || 0) : 0;
        b45 += cl.buckets ? (cl.buckets["4-5 min"] || 0) : 0;
        b610 += cl.buckets ? (cl.buckets["6-10 min"] || 0) : 0;
        b10 += cl.buckets ? (cl.buckets[">10 min"] || 0) : 0;
        bBot += cl.completed;

        Object.keys(cl.failures).forEach(fkey => {
          failuresMap[fkey] = (failuresMap[fkey] || 0) + cl.failures[fkey];
        });
      }
    });

    timeChartInstance = new Chart(ctxTime, {
      type: 'bar',
      data: {
        labels: ['0-3 min', '4-5 min', '6-10 min', '>10 min', 'DA Bot'],
        datasets: [{
          data: [b03, b45, b610, b10, bBot],
          backgroundColor: ['#10b981', '#f97316', '#ef4444', '#94a3b8', '#e01e26'],
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: gridColor }, ticks: { color: textColor, font: { family: 'Neue Montreal' } } },
          y: { grid: { color: gridColor }, ticks: { color: textColor, font: { family: 'Neue Montreal' } } }
        }
      }
    });

    const fLabels = Object.keys(failuresMap);
    const fValues = Object.values(failuresMap);

    failureChartInstance = new Chart(ctxFailure, {
      type: 'doughnut',
      data: {
        labels: fLabels.length > 0 ? fLabels : ['SLA Perfect'],
        datasets: [{
          data: fValues.length > 0 ? fValues : [100],
          backgroundColor: ['#e01e26', '#f97316', '#06b6d4', '#10b981', '#6366f1'],
          borderWidth: 1,
          borderColor: isDark ? '#0b1120' : '#ffffff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'right', labels: { color: textColor, font: { family: 'Neue Montreal', size: 10 } } }
        }
      }
    });
  }
}

// ── DOWNLOADING AND EXPORTS ─────────────────────────────────────────────────── */
function downloadChart(chartId, filename) {
  const canvas = document.getElementById(chartId);
  if (!canvas) return;
  
  const imageURI = canvas.toDataURL("image/png");
  const link = document.createElement('a');
  link.download = filename;
  link.href = imageURI;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function exportTableToCSV(filename) {
  const csv = [];
  const rows = document.querySelectorAll("#diagnosticTable tr");
  
  for (let i = 0; i < rows.length; i++) {
    const row = [], cols = rows[i].querySelectorAll("td, th");
    
    for (let j = 0; j < cols.length; j++) {
      let data = cols[j].innerText.replace(/(\r\n|\n|\r)/gm, "").replace(/(\s\s)/gm, " ");
      data = data.replace(/"/g, '""');
      row.push('"' + data + '"');
    }
    csv.push(row.join(","));
  }

  const csvBlob = new Blob([csv.join("\n")], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(csvBlob);
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function exportSlaData() {
  const csv = [];
  csv.push('"Bucket","In-Range Inspections Count"');
  
  let b03 = 0, b45 = 0, b610 = 0, b10 = 0, bBot = 0;
  Object.keys(activeDataset).forEach(d => {
    const b = activeDataset[d];
    if (activeTab === 'summary') {
      Object.keys(b.clients).forEach(key => {
        const cl = b.clients[key];
        b03 += cl.buckets ? (cl.buckets["0-3 min"] || 0) : 0;
        b45 += cl.buckets ? (cl.buckets["4-5 min"] || 0) : 0;
        b610 += cl.buckets ? (cl.buckets["6-10 min"] || 0) : 0;
        b10 += cl.buckets ? (cl.buckets[">10 min"] || 0) : 0;
        bBot += cl.completed;
      });
    } else {
      const cl = b.clients[activeTab];
      if (cl) {
        b03 += cl.buckets ? (cl.buckets["0-3 min"] || 0) : 0;
        b45 += cl.buckets ? (cl.buckets["4-5 min"] || 0) : 0;
        b610 += cl.buckets ? (cl.buckets["6-10 min"] || 0) : 0;
        b10 += cl.buckets ? (cl.buckets[">10 min"] || 0) : 0;
        bBot += cl.completed;
      }
    }
  });

  csv.push(`"0-3 min",${b03}`);
  csv.push(`"4-5 min",${b45}`);
  csv.push(`"6-10 min",${b610}`);
  csv.push(`">10 min",${b10}`);
  csv.push(`"DA Bot",${bBot}`);

  const csvBlob = new Blob([csv.join("\n")], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(csvBlob);
  link.download = `${activeTab}_sla_buckets_export.csv`;
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function exportFailuresData() {
  const csv = [];
  csv.push('"Failure Reason","Aggregated Count"');
  
  const failuresMap = {};
  Object.keys(activeDataset).forEach(d => {
    const b = activeDataset[d];
    if (activeTab === 'summary') {
      Object.keys(b.clients).forEach(key => {
        const cl = b.clients[key];
        Object.keys(cl.failures).forEach(fkey => {
          failuresMap[fkey] = (failuresMap[fkey] || 0) + cl.failures[fkey];
        });
      });
    } else {
      const cl = b.clients[activeTab];
      if (cl) {
        Object.keys(cl.failures).forEach(fkey => {
          failuresMap[fkey] = (failuresMap[fkey] || 0) + cl.failures[fkey];
        });
      }
    }
  });

  Object.keys(failuresMap).forEach(key => {
    csv.push(`"${key.replace(/"/g, '""')}",${failuresMap[key]}`);
  });

  const csvBlob = new Blob([csv.join("\n")], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(csvBlob);
  link.download = `${activeTab}_failures_export.csv`;
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function exportVolumeTrendData() {
  const csv = [];
  csv.push('"Date","Volume (Cases)"');
  
  const sortedDates = Object.keys(activeDataset).sort();
  sortedDates.forEach(d => {
    const b = activeDataset[d];
    let vol = 0;
    if (activeTab === 'summary') vol = b.totals.cases;
    else vol = b.clients[activeTab] ? b.clients[activeTab].cases : 0;
    csv.push(`"${d}",${vol}`);
  });

  const csvBlob = new Blob([csv.join("\n")], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(csvBlob);
  link.download = `${activeTab}_volume_trend_export.csv`;
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function exportGlobalCsv() {
  const csv = [];
  csv.push('"Date","Client","Cases Processed","Completed","Failed","Failure Rate %","Manual SLA Time (min)","DA Bot SLA Time (min)"');
  
  Object.keys(activeDataset).sort().forEach(d => {
    const brief = activeDataset[d];
    Object.keys(brief.clients).forEach(clKey => {
      const cl = brief.clients[clKey];
      const clientName = CLIENT_META[clKey] ? CLIENT_META[clKey].name : clKey;
      csv.push(`"${d}","${clientName}",${cl.cases},${cl.completed},${cl.failed},${cl.failure_rate_pct},${cl.da_time},${cl.da_bot_time}`);
    });
  });

  const csvBlob = new Blob([csv.join("\n")], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(csvBlob);
  link.setAttribute("href", url);
  link.setAttribute("download", `satyanweshi_global_platform_export_${new Date().toISOString().slice(0,10)}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
