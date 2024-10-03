import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { Formik } from 'formik';
import { className } from '../../../../../utils/className';
import CustomField from '../../../../../components/CustomField';

const FINANCIAL_FIELDS_1 = [
  {
    label: 'Evaluación Financiera',
    subLabel: 'Información financiera del solicitante',
    component: 'Title',
  },
  {
    label: 'Ventas',
    name: 'ventas',
    component: 'Title',
  },
  {
    label: 'Buena',
    name: 'ventasBuena',
    component: 'TextField',
    placeholder: 'Ingrese ventas buenas',
    customProps: {
      keyboardType: 'numeric'
    }
  },
  {
    label: 'Regular',
    name: 'ventasRegular',
    component: 'TextField',
    placeholder: 'Ingrese ventas regulares',
    customProps: {
      keyboardType: 'numeric'
    }
  },
  {
    label: 'Baja',
    name: 'ventasBaja',
    component: 'TextField',
    placeholder: 'Ingrese ventas bajas',
    customProps: {
      keyboardType: 'numeric'
    }
  },
  {
    label: 'Rec CxC',
    name: 'recCxC',
    component: 'TextField',
    placeholder: 'Ingrese Rec CxC',
    customProps: {
      keyboardType: 'numeric'
    }
  },
  {
    label: 'Total Mensual',
    name: 'totalMensual',
    component: 'TextField',
    placeholder: 'Total mensual',
    customProps: {
      keyboardType: 'numeric',
      editable: false
    }
  },
];

const FINANCIAL_FIELDS_2 = [
  {
    label: 'Otros Ingresos',
    name: 'otrosIngresos',
    component: 'Title',
  },
  {
    label: 'Cónyuge',
    name: 'ingresosConyuge',
    component: 'TextField',
    placeholder: 'Ingresos del cónyuge',
    customProps: {
      keyboardType: 'numeric'
    }
  },
  {
    label: 'Otros Negocios',
    name: 'ingresosOtrosNegocios',
    component: 'TextField',
    placeholder: 'Ingresos de otros negocios',
    customProps: {
      keyboardType: 'numeric'
    }
  },
  {
    label: 'Remesas',
    name: 'ingresosRemesas',
    component: 'TextField',
    placeholder: 'Ingresos por remesas',
    customProps: {
      keyboardType: 'numeric'
    }
  },
  {
    label: 'Salarios',
    name: 'ingresosSalarios',
    component: 'TextField',
    placeholder: 'Ingresos por salarios',
    customProps: {
      keyboardType: 'numeric'
    }
  },
  {
    label: 'Total Otros Ingresos',
    name: 'totalOtrosIngresos',
    component: 'TextField',
    placeholder: 'Total otros ingresos',
    customProps: {
      keyboardType: 'numeric',
      editable: false
    }
  },
];

const FINANCIAL_FIELDS_3 = [
  {
    label: 'Gastos Operativos',
    name: 'gastosOperativos',
    component: 'Title',
  },
  // Aquí puedes agregar los campos de gastos operativos siguiendo el mismo patrón
];

const FINANCIAL_FIELDS_4 = [
  {
    label: 'Gastos Familiares',
    name: 'gastosFamiliares',
    component: 'Title',
  },
  // Aquí puedes agregar los campos de gastos familiares siguiendo el mismo patrón
];

const FINANCIAL_FIELDS_5 = [
  {
    label: 'Estado de Ganancias y Pérdidas',
    name: 'estadoGananciaPerdida',
    component: 'Title',
  },
  // Aquí puedes agregar los campos del estado de ganancias y pérdidas siguiendo el mismo patrón
];

const FinancialEvaluationPage = () => {
  const initialValues = {
    ventasBuena: '',
    ventasRegular: '',
    ventasBaja: '',
    recCxC: '',
    totalMensual: '',
    ingresosConyuge: '',
    ingresosOtrosNegocios: '',
    ingresosRemesas: '',
    ingresosSalarios: '',
    totalOtrosIngresos: '',
    // Agrega aquí los demás campos iniciales
  };

  const handleSubmit = (values) => {
    console.log(values);
    // Aquí puedes manejar el envío de datos
  };

  return (
    <ScrollView style={className('p-4 bg-white')}>
      <Text style={className('text-2xl font-bold text-center mb-6 text-blue-600')}>
        Evaluación Financiera
      </Text>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleChange, handleSubmit, values }) => (
          <View>
            {FINANCIAL_FIELDS_1.map((field, index) => (
              <CustomField
                field={field}
                handleChange={handleChange}
                values={values}
                key={index}
              />
            ))}
            {FINANCIAL_FIELDS_2.map((field, index) => (
              <CustomField
                field={field}
                handleChange={handleChange}
                values={values}
                key={index}
              />
            ))}
            {FINANCIAL_FIELDS_3.map((field, index) => (
              <CustomField
                field={field}
                handleChange={handleChange}
                values={values}
                key={index}
              />
            ))}
            {FINANCIAL_FIELDS_4.map((field, index) => (
              <CustomField
                field={field}
                handleChange={handleChange}
                values={values}
                key={index}
              />
            ))}
            {FINANCIAL_FIELDS_5.map((field, index) => (
              <CustomField
                field={field}
                handleChange={handleChange}
                values={values}
                key={index}
              />
            ))}
            <Button title="Guardar Evaluación Financiera" onPress={handleSubmit} />
            <Text style={className('mt-4 text-sm text-gray-600')}>
              {JSON.stringify(values, null, 2)}
            </Text>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default FinancialEvaluationPage;