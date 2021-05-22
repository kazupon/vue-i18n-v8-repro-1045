export function menu(i18n) {
  return [
    {
      title: i18n.t("navigation.schedule"),
      children: [
        {
          title: i18n.t("navigation.planning"),
          // route: 'Home'
          path: "/checkpoint/control_calendar"
        },
        {
          title: i18n.t("navigation.calendar"),
          path: "/checkpoint/control_summary_calendar"
        }
      ]
    },
    {
      title: i18n.t("navigation.management"),
      children: [
        {
          title: i18n.t("navigation.customers_and_sites"),
          path: "/checkpoint/customer"
        },
        {
          title: i18n.t("navigation.employees"),
          path: "/config/employee/employees"
        },
        {
          title: i18n.t("navigation.position"),
          path: "/config/position"
        },
        {
          title: i18n.t("navigation.employees_groups"),
          path: "/employee-groups/index"
        }
      ]
    },
    {
      title: i18n.t("navigation.reports"),
      children: [
        {
          title: i18n.t("navigation.custom_reports"),
          children: [
            {
              title: i18n.t("navigation.full_time"),
              path: "/reports/execute/4"
            },
            {
              title: i18n.t("navigation.shopping_center"),
              path: "/reports/execute/5"
            }
          ]
        },
        {
          title: i18n.t("navigation.inspectors_summary"),
          path: "/checkpoint/control_summary_employee"
        },
        {
          title: i18n.t("navigation.inspections_statistics_for_inspector"),
          path: "/checkpoint/control_summary_statistics/inspector"
        },
        {
          title: i18n.t("navigation.inspections_statistics_for_locations"),
          path: "/checkpoint/control_summary_statistics"
        },
        {
          title: i18n.t("navigation.inspections_statistics_for_customer"),
          path: "/checkpoint/control_summary_statistics/customer"
        },
        {
          title: i18n.t("navigation.inspections_statistics_for_territory"),
          path: "/checkpoint/control_summary_statistics/territory"
        },
        {
          title: i18n.t("navigation.inspections_statistics_for_employee"),
          path: "/checkpoint/control_summary_statistics/employee"
        },
        {
          title: i18n.t("navigation.incidents_types_reports"),
          path: "/incidents/reports/kind"
        },
        {
          title: i18n.t("navigation.incidents_quantity_by_type"),
          path: "/reports/incidents/per-year"
        },
        {
          title: i18n.t("navigation.incidents_quantity_by_location"),
          path: "/reports/incidents/per-object"
        },
        {
          title: i18n.t("navigation.incidents_quantity_by_source"),
          path: "/reports/incidents/by-source"
        }
      ]
    },
    {
      title: i18n.t("navigation.inspections"),
      children: [
        {
          title: i18n.t("navigation.summary_of_inspections"),
          route: "inspectionsSummary"
        },
        {
          title: i18n.t("navigation.templates"),
          path: "/config/control_template"
        },
        {
          title: i18n.t("navigation.general_settings"),
          path: "/config_checkpoint/configGlobal"
        }
      ]
    },
    {
      title: i18n.t("navigation.incidents"),
      children: [
        {
          title: i18n.t("navigation.incidents"),
          path: "/incidents"
        },
        {
          title: i18n.t("navigation.incidents_types"),
          path: "/incidents/kinds"
        },
        {
          title: i18n.t("navigation.incidents_status"),
          path: "/incidents/statuses"
        }
      ]
    },
    {
      title: i18n.t("navigation.configuration"),
      children: [
        {
          title: i18n.t("navigation.custom_reports"),
          path: "/reports/index"
        },
        {
          title: i18n.t("navigation.general_settings"),
          path: "/config_global"
        },
        {
          title: i18n.t("navigation.holiday_calendar"),
          path: "/config_holidays/index"
        },
        {
          title: i18n.t("navigation.countries"),
          path: "/config/countries"
        },
        {
          title: i18n.t("navigation.territories"),
          path: "/config/territory"
        },
        {
          title: i18n.t("navigation.cities"),
          path: "/config/city"
        },
        {
          title: i18n.t("navigation.download_mobile_app"),
          path: "/config/download"
        },
        {
          title: i18n.t("navigation.qrcode_generator"),
          path: "/config/code_generator"
        },
        {
          title: i18n.t("navigation.connections"),
          path: "/config/sync"
        },
        {
          title: i18n.t("navigation.object_groups"),
          path: "/config/groups"
        },
        {
          title: i18n.t("navigation.companies_types"),
          path: "/config/companies-kinds"
        },
        {
          title: i18n.t("navigation.companies"),
          path: "/config/companies"
        }
      ]
    },
    {
      title: i18n.t("navigation.admin"),
      children: [
        {
          title: i18n.t("navigation.devices"),
          path: "/config/devices"
        },
        {
          title: i18n.t("navigation.system_logs"),
          path: "/systemlog"
        },
        {
          title: i18n.t("navigation.sms_log"),
          path: "/admin/smslog"
        },
        {
          title: i18n.t("navigation.mail_log"),
          path: "/admin/maillog"
        }
      ]
    }
  ]
}