#!/bin/bash
# Generates public/system_info.json for the system_info.html page.
set -euo pipefail

OUT="/home/simon/Documents/reps/priv/shelgen/public/system_info.json"

MODEL=$(tr -d '\0' < /proc/device-tree/model)
OS=$(grep PRETTY_NAME /etc/os-release | cut -d= -f2 | tr -d '"')
UPTIME=$(uptime -p)
CPU_TEMP=$(vcgencmd measure_temp | grep -oE '[0-9.]+')
CPU_CORES=$(nproc)

read -r LOAD_1 LOAD_5 LOAD_15 _ < /proc/loadavg
LOAD_1_PCT=$(awk -v l="$LOAD_1" -v c="$CPU_CORES" 'BEGIN { printf "%.1f", (l / c) * 100 }')

read -r MEM_TOTAL MEM_USED MEM_FREE MEM_SHARED MEM_BUFFCACHE MEM_AVAILABLE < <(free -b | awk '/^Mem:/ {print $2, $3, $4, $5, $6, $7}')
MEM_USED_ACTUAL=$((MEM_TOTAL - MEM_AVAILABLE))
MEM_TOTAL_GB=$(awk -v b="$MEM_TOTAL" 'BEGIN { printf "%.1f", b / 1073741824 }')
MEM_USED_GB=$(awk -v b="$MEM_USED_ACTUAL" 'BEGIN { printf "%.1f", b / 1073741824 }')
MEM_PCT=$(awk -v u="$MEM_USED_ACTUAL" -v t="$MEM_TOTAL" 'BEGIN { printf "%.1f", (u / t) * 100 }')

read -r DISK_TOTAL DISK_USED _ DISK_PCT_RAW _ < <(df -B1 / | awk 'NR==2 {print $2, $3, $4, $5, $6}')
DISK_TOTAL_GB=$(awk -v b="$DISK_TOTAL" 'BEGIN { printf "%.1f", b / 1073741824 }')
DISK_USED_GB=$(awk -v b="$DISK_USED" 'BEGIN { printf "%.1f", b / 1073741824 }')
DISK_PCT=${DISK_PCT_RAW%\%}

GENERATED_AT=$(date -Iseconds)

cat > "$OUT" <<JSON
{
  "model": "${MODEL}",
  "os": "${OS}",
  "uptime_pretty": "${UPTIME}",
  "cpu_temp_c": ${CPU_TEMP},
  "cpu_cores": ${CPU_CORES},
  "load_1": ${LOAD_1},
  "load_5": ${LOAD_5},
  "load_15": ${LOAD_15},
  "load_1_pct": ${LOAD_1_PCT},
  "mem_used_gb": ${MEM_USED_GB},
  "mem_total_gb": ${MEM_TOTAL_GB},
  "mem_pct": ${MEM_PCT},
  "disk_used_gb": ${DISK_USED_GB},
  "disk_total_gb": ${DISK_TOTAL_GB},
  "disk_pct": ${DISK_PCT},
  "generated_at": "${GENERATED_AT}"
}
JSON
