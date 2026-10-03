export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'cloud' | 'automation' | 'fullstack' | 'infrastructure';
  categoryLabel: string;
  summary: string;
  architectureDetails: string;
  problem: string;
  solution: string;
  outcomes: string[];
  techStack: string[];
  cloudProviders: ('AWS' | 'GCP' | 'Hybrid')[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
  commandSnippet?: {
    shell: 'bash' | 'powershell' | 'python';
    title: string;
    code: string;
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  items: {
    name: string;
    level: string;
    details: string;
    highlight?: boolean;
  }[];
}

export interface AutomationScript {
  id: string;
  name: string;
  category: string;
  language: 'PowerShell' | 'Bash' | 'Python';
  description: string;
  impact: string;
  code: string;
  simulatedOutput: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  type: string;
  location: string;
  summary: string;
  achievements: string[];
  coreTech: string[];
}

export const PERSONAL_INFO = {
  name: 'Kumar',
  title: 'Software & Cloud Infrastructure Engineer',
  currentRole: 'Desktop Support Engineer · Systems Automation Specialist',
  email: 'k2kumarit@gmail.com',
  github: 'https://github.com/kumar-it',
  linkedin: 'https://linkedin.com/in/kumar-support-cloud',
  location: 'Available for Remote & Hybrid Roles',
  bioHeadline: 'Turning Hands-On Operating System Diagnostics into Resilient Cloud Architecture & Code',
  bioSummary:
    'With deep roots in desktop support and enterprise system optimization, I bridge the gap between physical operating systems and modern cloud platforms. I specialize in building automation tools with PowerShell, Bash, and Python, while designing highly available architectures across Amazon Web Services (AWS) and Google Cloud Platform (GCP). My mission is eliminating repetitive manual toil through elegant code and rock-solid infrastructure.',
  stats: [
    { label: 'Endpoints Automated', value: '500+', unit: 'workstations' },
    { label: 'Deployment Reliability', value: '99.8%', unit: 'success rate' },
    { label: 'Cloud Cost Saved', value: '34%', unit: 'average reduction' },
    { label: 'Automation Scripts', value: '50+', unit: 'production ready' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'cloudops-fleet-automator',
    title: 'CloudOps Fleet Automator',
    subtitle: 'Cross-Cloud Endpoint Health & Self-Healing Agent',
    category: 'cloud',
    categoryLabel: 'Cloud & Infrastructure',
    summary:
      'A serverless orchestration engine that connects enterprise endpoints to AWS & GCP, autonomously healing misconfigured services, clearing disk bottlenecks, and syncing inventory.',
    architectureDetails:
      'Engineered a lightweight Python telemetry daemon running on Windows & Linux nodes. Telemetry payloads publish to an AWS API Gateway + Lambda backend, which validates signatures and stores state in DynamoDB while streaming critical incident alerts to Google Cloud Logging via Pub/Sub.',
    problem:
      'Desktop support teams were spending 15+ hours weekly manually diagnosing disk space alerts, stopped VPN services, and stale Active Directory computer objects.',
    solution:
      'Implemented an autonomous self-healing agent that triggers targeted remediation playbooks (safe disk purge, print spooler reset, agent reload) before escalating to technicians.',
    outcomes: [
      'Reduced tier-1 endpoint support ticket volume by 46%',
      'Mean Time To Resolution (MTTR) dropped from 38 minutes to under 2 minutes for disk and service failures',
      'Unified visibility across 500+ physical and virtual endpoints in one dashboard'
    ],
    techStack: ['Python', 'AWS Lambda', 'Amazon DynamoDB', 'GCP Pub/Sub', 'PowerShell Core', 'Terraform', 'Docker'],
    cloudProviders: ['AWS', 'GCP'],
    image: '/src/assets/images/cloud_topology_1791002767183.jpg',
    githubUrl: 'https://github.com/kumar-it/cloudops-fleet-automator',
    commandSnippet: {
      shell: 'python',
      title: 'agent_health_probe.py',
      code: `import boto3, psutil, requests

def evaluate_endpoint():
    disk = psutil.disk_usage('/')
    mem = psutil.virtual_memory()
    payload = {
        "host": "WS-HYBRID-092",
        "disk_free_gb": round(disk.free / (1024**3), 2),
        "mem_percent": mem.percent,
        "services_healthy": True
    }
    # Invoke AWS Lambda triage endpoint
    res = requests.post("https://api.cloudops.internal/v1/telemetry", json=payload)
    return res.status_code == 200`
    }
  },
  {
    id: 'cloud-sentinel-drift',
    title: 'Cloud Sentinel: AWS & GCP Drift & Cost Auditor',
    subtitle: 'Multi-Cloud Resource Optimization & Policy Enforcer',
    category: 'cloud',
    categoryLabel: 'Cloud Engineering',
    summary:
      'Serverless resource auditor inspecting unattached EBS volumes, oversized Google Compute Engine instances, and unencrypted S3/Cloud Storage buckets.',
    architectureDetails:
      'Built using Boto3 (AWS) and Google Cloud Client Libraries, orchestrating daily scheduled executions via AWS EventBridge and GCP Cloud Scheduler. Emits consolidated Slack / Email digests with automated one-click snapshot & cleanup triggers.',
    problem:
      'Dev and test teams regularly left high-spec GPU instances and unattached disk volumes running over weekends, causing unexpected 25-40% cloud bill spikes.',
    solution:
      'Created non-intrusive auditor scripts that tag non-compliant assets, send warning webhooks to owners, and apply automated stop-schedules outside working hours.',
    outcomes: [
      'Saved $18,400+ in annual cloud spend across test and staging environments',
      'Enforced 100% encryption-at-rest compliance on newly provisioned cloud buckets',
      'Provided automated weekly executive cost breakdown reports'
    ],
    techStack: ['AWS Boto3', 'Google Cloud SDK', 'Python', 'AWS CloudWatch', 'GCP Cloud Run', 'Terraform'],
    cloudProviders: ['AWS', 'GCP'],
    image: '/src/assets/images/cloud_topology_1791002767183.jpg',
    githubUrl: 'https://github.com/kumar-it/cloud-sentinel-drift',
    commandSnippet: {
      shell: 'bash',
      title: 'audit_unattached_volumes.sh',
      code: `#!/usr/bin/env bash
# Scan AWS EBS and GCP Persistent Disks for unattached volumes
echo "[*] Auditing AWS Region us-east-1..."
aws ec2 describe-volumes --filters Name=status,Values=available \\
  --query 'Volumes[*].[VolumeId,Size,CreateTime]' --output table

echo "[*] Auditing Google Cloud compute disks..."
gcloud compute disks list --filter="-users:*" \\
  --format="table(name,zone,sizeGb,status)"`
    }
  },
  {
    id: 'zerotouch-sysdeploy',
    title: 'ZeroTouch SysDeploy',
    subtitle: 'Automated OS Provisioning & Package Pipeline',
    category: 'automation',
    categoryLabel: 'System Optimization',
    summary:
      'End-to-end bare-metal and virtual machine provisioning framework using PowerShell Core, Bash, Ansible, and automated cloud configuration templates.',
    architectureDetails:
      'Combines PXE/iPXE boot workflows with modular post-install configuration scripts. Hardware specifications are automatically profiled via WMI/dmidecode, appropriate OEM drivers injected from cloud storage, and baseline security configurations applied.',
    problem:
      'Onboarding new employees or re-imaging compromised laptops required 2.5 hours of manual hands-on technician work per machine.',
    solution:
      'Engineered an unattended provisioning pipeline where machines boot into a lightweight staging environment, install golden OS images, and configure domain trust automatically.',
    outcomes: [
      'Machine turnaround time dropped from 150 minutes to 18 minutes unattended',
      'Guaranteed zero configuration drift across departmental software baselines',
      'Enabled rapid recovery of remote laptops via self-service recovery USB builds'
    ],
    techStack: ['PowerShell Core', 'Bash', 'Ansible', 'Windows PE', 'Cloud Storage', 'Sysprep', 'WMI'],
    cloudProviders: ['Hybrid'],
    image: '/src/assets/images/system_automation_1791002780628.jpg',
    githubUrl: 'https://github.com/kumar-it/zerotouch-sysdeploy',
    commandSnippet: {
      shell: 'powershell',
      title: 'Invoke-ZeroTouchBaseline.ps1',
      code: `# Windows Enterprise Automated Baseline Setup
$Drivers = Get-WmiObject Win32_PnPSignedDriver | Where-Object DeviceName -ne $null
Write-Host "[*] Detected $($Drivers.Count) hardware driver endpoints"

# Configure security baseline & bitlocker encryption
Enable-BitLocker -MountPoint "C:" -EncryptionMethod XtsAes256 -UsedSpaceOnly -TpmProtector
Set-ItemProperty -Path "HKLM:\\SOFTWARE\\Policies\\Microsoft\\Windows\\WindowsUpdate\\AU" -Name "AUOptions" -Value 4
Write-Host "[✓] Core OS hardening and BitLocker applied successfully."`
    }
  },
  {
    id: 'it-incident-diagnostic-hub',
    title: 'IT Incident Diagnostics & Telemetry Hub',
    subtitle: 'Full-Stack Support Analytics & Script Runner',
    category: 'fullstack',
    categoryLabel: 'Full-Stack Software',
    summary:
      'A real-time web portal that empowers desktop support engineers to run remote diagnostics, inspect Windows Event Logs, and execute verified remediation scripts with one click.',
    architectureDetails:
      'Developed with React, TypeScript, Node.js, and Tailwind CSS on the frontend. Communicates with a secure microservice bridge using signed JWTs to execute authorized PowerShell and Bash modules on endpoints.',
    problem:
      'Technicians had to initiate remote desktop sessions for minor diagnostics, interrupting users during meetings and slowing down queue resolution.',
    solution:
      'Built a web portal allowing non-intrusive background queries (process list, pending reboot flags, network adapters, thermal stats) without interrupting the end-user.',
    outcomes: [
      'Over 60% of diagnostic tasks performed completely out-of-band without disturbing users',
      'Eliminated user credential exposure during remote assistance sessions',
      'Full audit trail recording who ran which remediation script and when'
    ],
    techStack: ['React', 'TypeScript', 'Node.js / Express', 'Tailwind CSS', 'PowerShell Remoting', 'REST APIs'],
    cloudProviders: ['GCP'],
    image: '/src/assets/images/engineer_workspace_1791002752728.jpg',
    githubUrl: 'https://github.com/kumar-it/it-incident-diagnostic-hub',
    demoUrl: '#automation-lab'
  },
  {
    id: 'iam-least-privilege-guardian',
    title: 'Cloud IAM Least Privilege Guardian',
    subtitle: 'Automated Access Audit for AWS & Google Cloud IAM',
    category: 'infrastructure',
    categoryLabel: 'Cloud Security',
    summary:
      'Automated security auditor evaluating wildcard permissions (*:*), stale API access keys older than 90 days, and unmonitored administrative service accounts.',
    architectureDetails:
      'Queries AWS Access Advisor APIs and GCP IAM Recommender APIs to identify unused entitlements. Formulates automated remediation pull requests to reduce permissions to minimal required scopes.',
    problem:
      'Support engineers and developers often requested broad Admin access during troubleshooting and never had excessive rights revoked after incidents.',
    solution:
      'Built a recurring audit script with time-bound temporary role assumption (Just-In-Time access) and automated stale key deactivation.',
    outcomes: [
      'Eliminated 83 stale IAM keys and removed 14 redundant Admin privileges',
      'Established zero-trust access expiration for temporary vendor troubleshooting',
      'Achieved zero critical findings in annual infrastructure compliance audit'
    ],
    techStack: ['AWS IAM', 'Google Cloud IAM', 'Python', 'Boto3', 'GCP Asset Inventory', 'GitHub Actions'],
    cloudProviders: ['AWS', 'GCP'],
    image: '/src/assets/images/cloud_topology_1791002767183.jpg',
    githubUrl: 'https://github.com/kumar-it/iam-least-privilege-guardian'
  },
  {
    id: 'endpoint-telemetry-cleaner',
    title: 'AutoClean & Storage Optimizer Suite',
    subtitle: 'High-Performance Windows & Linux Disk Maintenance Engine',
    category: 'automation',
    categoryLabel: 'Automation & Scripting',
    summary:
      'Intelligent background cleanup tool targeting shadow copies, orphaned installer caches, Windows Update staging logs, and Docker container residue.',
    architectureDetails:
      'Custom compiled PowerShell and Bash scripts utilizing safe dry-run flags, filesystem lock checks, and automated rollback points to safely recover gigabytes of storage on constrained endpoints.',
    problem:
      'Engineers using developer VMs and physical laptops suffered frequent system freezing and failed OS updates due to < 5GB remaining disk capacity.',
    solution:
      'Designed a multi-tier cleanup script that safely compresses old logs, cleans package managers (apt, choco, npm, pip), and purges obsolete temporary system caches.',
    outcomes: [
      'Average 14.2 GB of disk space recovered per machine without data loss',
      '95% drop in failed automated Windows and security patches caused by low disk storage',
      'Automated deployment via Active Directory GPO and cron jobs'
    ],
    techStack: ['PowerShell Core', 'Bash', 'Windows Registry', 'Linux Cron', 'Disk Cleanup APIs'],
    cloudProviders: ['Hybrid'],
    image: '/src/assets/images/system_automation_1791002780628.jpg',
    githubUrl: 'https://github.com/kumar-it/endpoint-telemetry-cleaner'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Amazon Web Services (AWS)',
    description: 'Architecture design, serverless deployments, storage optimization, and identity management.',
    iconName: 'aws',
    items: [
      { name: 'EC2 & Auto Scaling', level: 'Advanced', details: 'Lifecycle hooks, AMI creation, Nitro instances, spot fleet management', highlight: true },
      { name: 'AWS Lambda & Serverless', level: 'Proficient', details: 'Python event handlers, API Gateway integrations, CloudWatch log streams', highlight: true },
      { name: 'S3 & Storage Classes', level: 'Advanced', details: 'Lifecycle rules, Glacier archival, cross-region replication, bucket policies' },
      { name: 'VPC & Networking', level: 'Proficient', details: 'Subnets, NAT Gateways, Route Tables, Security Groups, NACLs' },
      { name: 'IAM & Security', level: 'Advanced', details: 'Role assumption, least privilege policies, KMS encryption, IAM Access Analyzer' },
      { name: 'CloudWatch & Systems Manager', level: 'Advanced', details: 'SSM Run Command for remote fleet automation, CloudWatch Alarms' }
    ]
  },
  {
    title: 'Google Cloud Platform (GCP)',
    description: 'Containerized workloads, enterprise IAM governance, and serverless compute.',
    iconName: 'gcp',
    items: [
      { name: 'Google Compute Engine (GCE)', level: 'Advanced', details: 'Instance templates, custom OS images, startup scripts, disk snapshots', highlight: true },
      { name: 'Cloud Run & Cloud Functions', level: 'Proficient', details: 'Deploying lightweight automation APIs and event-driven microservices', highlight: true },
      { name: 'Cloud Storage & Buckets', level: 'Proficient', details: 'Uniform bucket-level access, signed URLs, gsutil automation' },
      { name: 'Google Cloud IAM', level: 'Advanced', details: 'Service accounts, workload identity federation, custom roles' },
      { name: 'Cloud Logging & Monitoring', level: 'Proficient', details: 'Log-based metrics, alerting policies, Pub/Sub log exports' },
      { name: 'GCP Cloud Shell & SDK', level: 'Advanced', details: 'gcloud CLI scripting, automated project provisioning pipelines' }
    ]
  },
  {
    title: 'Automation & Scripting',
    description: 'Transforming tedious manual IT workflows into bulletproof executable code.',
    iconName: 'terminal',
    items: [
      { name: 'PowerShell Core (6/7+)', level: 'Expert', details: 'Remoting (WinRM/SSH), custom modules, WMI/CIM, API integration, AD management', highlight: true },
      { name: 'Bash & Linux Shell Scripting', level: 'Advanced', details: 'Cron jobs, sed/awk text processing, process surveillance, SSH orchestration', highlight: true },
      { name: 'Python Systems Programming', level: 'Proficient', details: 'Boto3, Google Cloud Client, requests, psutil, OS filesystem libraries', highlight: true },
      { name: 'Ansible & IaC (Terraform)', level: 'Intermediate', details: 'Configuration playbooks, multi-provider cloud provisioning modules' },
      { name: 'Git & Version Control', level: 'Advanced', details: 'Branching workflows, GitHub Actions CI/CD pipelines, automated testing' },
      { name: 'Docker & Containerization', level: 'Proficient', details: 'Multi-stage Dockerfiles, local debugging environments, lightweight utility images' }
    ]
  },
  {
    title: 'Desktop Support & System Optimization',
    description: 'The foundation: rigorous hardware, OS, network, and fleet diagnostics.',
    iconName: 'desktop',
    items: [
      { name: 'Windows 10/11 Enterprise', level: 'Expert', details: 'Registry tuning, sysprep, DISM repair, Event Viewer triage, memory dump analysis', highlight: true },
      { name: 'Active Directory & Group Policy', level: 'Advanced', details: 'OU design, GPO deployment, BitLocker recovery, Kerberos/NTLM authentication' },
      { name: 'Hardware Diagnostics & Repair', level: 'Expert', details: 'Component triage, thermal throttling, BIOS/UEFI flashing, NVMe performance benchmarking' },
      { name: 'Network Troubleshooting', level: 'Advanced', details: 'TCP/IP, DNS latency analysis, DHCP scopes, Wireshark packet inspection, VPN tunnels' },
      { name: 'Software Packaging & Patching', level: 'Advanced', details: 'Silent MSI/EXE deployments, Chocolatey/Winget package scripting, WSUS' },
      { name: 'Incident Root-Cause Analysis', level: 'Expert', details: 'Blameless postmortems, documentation, ITIL service management practices' }
    ]
  }
];

export const AUTOMATION_SCRIPTS: AutomationScript[] = [
  {
    id: 'health-check',
    name: 'Endpoint Diagnostic Probe',
    category: 'System Diagnostics',
    language: 'PowerShell',
    description: 'Scans CPU load, memory commit, disk health, thermal status, and critical Windows services.',
    impact: 'Identified 92% of hardware failures before total system crash.',
    code: `function Invoke-SystemHealthProbe {
    [CmdletBinding()]
    param([string]$ComputerName = $env:COMPUTERNAME)

    Write-Progress -Activity "Running diagnostic audit on $ComputerName" -Status "Collecting metrics..."
    
    $CPU = (Get-CimInstance Win32_Processor).LoadPercentage
    $Memory = Get-CimInstance Win32_OperatingSystem | Select-Object TotalVisibleMemorySize, FreePhysicalMemory
    $RAMUsage = [math]::Round((($Memory.TotalVisibleMemorySize - $Memory.FreePhysicalMemory) / $Memory.TotalVisibleMemorySize) * 100, 1)
    
    $Disks = Get-CimInstance Win32_LogicalDisk -Filter "DriveType=3" | ForEach-Object {
        [PSCustomObject]@{
            Drive       = $_.DeviceID
            FreeSpaceGB = [math]::Round($_.FreeSpace / 1GB, 2)
            TotalSizeGB = [math]::Round($_.Size / 1GB, 2)
            PercentFree = [math]::Round(($_.FreeSpace / $_.Size) * 100, 1)
        }
    }

    $CriticalServices = @('Spooler', 'wuauserv', 'CryptSvc', 'LanmanWorkstation')
    $ServiceStates = Get-Service -Name $CriticalServices | Select-Object Name, Status

    return [PSCustomObject]@{
        Hostname      = $ComputerName
        CPU_Load_Pct  = "$CPU%"
        RAM_Usage_Pct = "$RAMUsage%"
        Disks         = $Disks
        Services      = $ServiceStates
        Diagnostic    = if ($Disks.PercentFree -lt 15) { "WARNING: Low Disk" } else { "HEALTHY" }
    }
}

Invoke-SystemHealthProbe`,
    simulatedOutput: [
      '[+] Initializing Diagnostic Probe on Host: DESKTOP-HQ-ENG01...',
      '[*] Inspecting CIM Class Win32_Processor... CPU Load: 18%',
      '[*] Analyzing RAM footprint: 16.0 GB Total | 4.8 GB In Use (30.0%)',
      '[*] Inspecting Storage: C: [476.2 GB Total | 182.4 GB Free (38.3%)] - OK',
      '[*] Querying Service Status: Spooler (Running), wuauserv (Running), CryptSvc (Running)',
      '[*] Checking S.M.A.R.T. Drive Health... Drive 0 NVMe: 100% Life Remaining (38°C)',
      '--> DIAGNOSTIC RESULT: HOST IS OPTIMAL (0 errors, 0 warnings)'
    ]
  },
  {
    id: 'cloud-drift',
    name: 'AWS & GCP Idle Resource Sweeper',
    category: 'Cloud Optimization',
    language: 'Python',
    description: 'Detects running EC2/GCE development instances with zero network traffic over 48 hours.',
    impact: 'Saved $1,500+ monthly in recurring unused cloud compute costs.',
    code: `import boto3
from google.cloud import compute_v1
from datetime import datetime, timezone, timedelta

def audit_cloud_workloads():
    print("[*] Initiating cross-cloud idle audit...")
    
    # AWS Audit
    ec2 = boto3.client('ec2', region_name='us-east-1')
    instances = ec2.describe_instances(
        Filters=[{'Name': 'instance-state-name', 'Values': ['running']}]
    )
    
    idle_candidates = []
    for reservation in instances.get('Reservations', []):
        for inst in reservation.get('Instances', []):
            tags = {t['Key']: t['Value'] for t in inst.get('Tags', [])}
            if tags.get('Environment') == 'Development':
                idle_candidates.append({
                    'provider': 'AWS',
                    'id': inst['InstanceId'],
                    'type': inst['InstanceType'],
                    'launch_time': inst['LaunchTime'].strftime("%Y-%m-%d")
                })
                
    print(f"[✓] AWS Audit Complete: {len(idle_candidates)} dev instances flagged for weekend sleep.")
    return idle_candidates`,
    simulatedOutput: [
      '[*] Connecting to AWS IAM Session via assume_role: CloudAuditor-Role...',
      '[*] Scanning us-east-1 and us-west-2 for running dev instances...',
      '    - i-0a8b9f71c3 (t3.xlarge) - Tag: Dev-Test-Stack - Inactive 48h -> FLAG',
      '    - i-0e42f9b801 (c5.large)  - Tag: QA-Regression   - Active IOPS  -> PASS',
      '[*] Connecting to GCP Project: production-infrastructure-core...',
      '[*] Inspecting compute zones: us-central1-a, asia-southeast1-b...',
      '    - gce-worker-temp-04 (e2-standard-4) - CPU usage < 1.2% -> FLAG',
      '--> SUMMARY: 2 idle instances detected. Cost savings opportunity: $184.20/mo'
    ]
  },
  {
    id: 'storage-purge',
    name: 'Automated Deep Storage Purge',
    category: 'System Optimization',
    language: 'Bash',
    description: 'Safely clears stale package caches, journal logs, and temporary crash dumps across endpoints.',
    impact: 'Prevented disk exhaustion alerts on 400+ corporate endpoints.',
    code: `#!/usr/bin/env bash
set -euo pipefail

echo "=========================================="
echo " Kumar's Automated Fleet Storage Optimizer"
echo "=========================================="

INITIAL_FREE=$(df -h / | awk 'NR==2 {print $4}')
echo "[*] Initial Free Space on /: $INITIAL_FREE"

# 1. Truncate journal logs older than 7 days
echo "[*] Vacuuming systemd journal logs..."
journalctl --vacuum-time=7d

# 2. Clean apt / package manager cache
if command -v apt-get &>/dev/null; then
    echo "[*] Purging obsolete deb archives..."
    apt-get clean -y
    apt-get autoremove --purge -y
fi

# 3. Clean Docker dangling images and volumes if present
if command -v docker &>/dev/null; then
    echo "[*] Pruning unused Docker containers and networks..."
    docker system prune -f --volumes
fi

FINAL_FREE=$(df -h / | awk 'NR==2 {print $4}')
echo "[✓] Cleanup Complete! Free space updated from $INITIAL_FREE to $FINAL_FREE."`,
    simulatedOutput: [
      '==========================================',
      " Kumar's Automated Fleet Storage Optimizer",
      '==========================================',
      '[*] Initial Free Space on /: 8.2 GB',
      '[*] Vacuuming systemd journal logs older than 7d... Freed 1.4 GB',
      '[*] Purging obsolete deb archives and temporary indices... Freed 2.8 GB',
      '[*] Cleaning crash dump directory /var/crash/... Freed 850 MB',
      '[*] Pruning unreferenced Docker layer cache... Freed 4.6 GB',
      '[✓] Cleanup Complete! Free space updated from 8.2 GB to 17.85 GB (+9.65 GB recovered).'
    ]
  },
  {
    id: 'network-dns-probe',
    name: 'Network Route & Gateway Latency Probe',
    category: 'Network Operations',
    language: 'PowerShell',
    description: 'Tests local gateway, external DNS propagation, and corporate VPN route table integrity.',
    impact: 'Instantly isolate whether connection issues are local Wi-Fi or ISP backbone.',
    code: `function Test-NetworkIntegrity {
    $Endpoints = @(
        @{ Name = "Default Gateway"; Target = (Get-NetRoute -DestinationPrefix '0.0.0.0/0').NextHop },
        @{ Name = "Internal DNS";    Target = "10.0.0.2" },
        @{ Name = "Cloudflare DNS";  Target = "1.1.1.1" },
        @{ Name = "AWS S3 Endpoint"; Target = "s3.amazonaws.com" },
        @{ Name = "GCP Cloud API";   Target = "storage.googleapis.com" }
    )

    $Results = foreach ($item in $Endpoints) {
        $ping = Test-Connection -TargetName $item.Target -Count 2 -Quiet
        $tcp = Test-NetConnection -ComputerName $item.Target -Port 443 -WarningAction SilentlyContinue
        [PSCustomObject]@{
            Destination = $item.Name
            Target      = $item.Target
            ICMP_Ping   = if ($ping) { "SUCCESS" } else { "DROPPED" }
            Latency_ms  = $tcp.RoundTripTime
        }
    }
    return $Results
}
Test-NetworkIntegrity`,
    simulatedOutput: [
      '[*] Gathering active NIC configuration and Default Gateway...',
      '[*] Gateway 192.168.1.1: Ping reply in 1.4ms (0% loss)',
      '[*] Corporate DNS 10.0.0.2: Ping reply in 4.2ms (Resolved internal domains: OK)',
      '[*] Public DNS 1.1.1.1: Ping reply in 9.1ms',
      '[*] Testing HTTPS route to AWS S3 (s3.amazonaws.com:443)... Connected (RTT: 14ms)',
      '[*] Testing HTTPS route to GCP (storage.googleapis.com:443)... Connected (RTT: 16ms)',
      '--> ROUTE INTEGRITY: PASS. No dropped packets or VPN routing conflicts detected.'
    ]
  }
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    role: 'Desktop Support Engineer (Automation Focus)',
    organization: 'Enterprise Technology Services',
    period: '2023 - Present',
    type: 'Full-Time',
    location: 'Hybrid / On-Site',
    summary:
      'Responsible for lifecycle endpoint operations, hardware diagnostics, and developing automation scripts that eliminate recurring support overhead across hundreds of Windows and Linux workstations.',
    achievements: [
      'Authored 40+ production PowerShell and Bash scripts for silent software deployments, BitLocker encryption auditing, and storage auto-maintenance.',
      'Reduced average workstation provisioning time from 2.5 hours to 18 minutes by designing a modular ZeroTouch imaging workflow.',
      'Implemented automated ticket triage workflows that pre-populate system diagnostics (thermal, event logs, RAM usage) before technician review.',
      'Configured Active Directory Group Policies (GPO), DNS records, and secure remote assistance tunnels adhering to zero-trust standards.'
    ],
    coreTech: ['PowerShell Core', 'Windows 10/11 Enterprise', 'Active Directory', 'Bash', 'Hardware Diagnostics', 'BitLocker', 'WMI/CIM']
  },
  {
    role: 'Cloud & Infrastructure Projects (AWS & GCP)',
    organization: 'Independent Engineering & Architecture Labs',
    period: '2022 - Present',
    type: 'Engineering Projects',
    location: 'Cloud',
    summary:
      'Designing and deploying resilient cloud environments on AWS and Google Cloud Platform, building infrastructure-as-code automation and serverless incident responders.',
    achievements: [
      'Architected cross-cloud cost auditor and resource drift monitor reducing non-production cloud spend by 34%.',
      'Provisioned serverless endpoints using AWS Lambda, API Gateway, and GCP Cloud Run with automated CI/CD via GitHub Actions.',
      'Authored Terraform modules for multi-tier VPC network topologies with isolated private subnets and secure bastion access.',
      'Audited cloud IAM policies to enforce principle of least privilege, eliminating unused root and wildcard admin credentials.'
    ],
    coreTech: ['AWS (EC2, S3, Lambda, IAM)', 'Google Cloud (GCE, Cloud Run, IAM)', 'Terraform', 'Python', 'Docker', 'Linux']
  },
  {
    role: 'IT Systems & Hardware Support Specialist',
    organization: 'IT Infrastructure & Client Support',
    period: '2021 - 2023',
    type: 'Full-Time',
    location: 'Enterprise On-Site',
    summary:
      'Delivered hands-on physical and software support for enterprise users, executive laptops, network switches, peripherals, and operating system recovery.',
    achievements: [
      'Diagnosed and resolved 2,000+ complex hardware, BIOS/UEFI, network connectivity, and operating system crash incidents.',
      'Maintained 99.4% customer satisfaction rating while consistently exceeding first-contact resolution benchmarks.',
      'Documented standard operating procedures (SOPs) and knowledge base articles adopted across the IT support team.'
    ],
    coreTech: ['Hardware Break-Fix', 'Network Patching (CAT6/Switching)', 'Windows Server', 'VPN Configuration', 'ITIL Practices']
  }
];

export const TESTIMONIALS = [
  {
    quote:
      'Kumar has that rare and invaluable combination of understanding operating systems down to the hardware registers, while also writing clean, modern Python and cloud automation. His scripts cut our support backlog by more than 40%.',
    author: 'Senior Systems Architect',
    organization: 'Enterprise Infrastructure Team',
    relation: 'Direct Engineering Collaborator'
  },
  {
    quote:
      'Whenever our cloud dev environments had runaway storage or mystery network timeouts, Kumar was the engineer who methodically diagnosed root cause and built a permanent automated fix so it never happened again.',
    author: 'Lead DevOps Specialist',
    organization: 'Cloud Platform Operations',
    relation: 'Cross-functional Colleague'
  }
];
