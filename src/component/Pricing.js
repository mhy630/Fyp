import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

export default function Pricing() {
  const pricingPlans = [
    {
      title: 'Free Plan',
      price: '0',
      features: ['Basic Analytics', 'Limited Access', 'Community Support'],
      highlight: false,
    },
    {
      title: 'Pro Plan',
      price: '29',
      features: ['Advanced Analytics', 'Unlimited Access', 'Priority Support'],
      highlight: true,
    },
  ];

  return (
    <Container sx={{ py: 8 }} id="pricing-section">
      {/* Section Title */}
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: 'bold', mb: 4, color: '#1c1c1c' }}
      >
        Our Pricing Plans
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{ mb: 6, color: '#7f8c8d' }}
      >
        Choose a plan that fits your needs. No hidden fees or extra charges.
      </Typography>

      {/* Pricing Cards */}
      <Grid container spacing={4} justifyContent="center">
        {pricingPlans.map((plan, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #ddd',
                borderRadius: '8px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                backgroundColor: plan.highlight ? '#fffbe6' : '#fff',
                '&:hover': { boxShadow: '0 6px 15px rgba(0,0,0,0.2)' },
              }}
            >
              <CardContent>
                {/* Plan Title */}
                <Typography
                  variant="h5"
                  align="center"
                  sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    color: plan.highlight ? '#d35400' : '#1c1c1c',
                  }}
                >
                  {plan.title}
                </Typography>
                {/* Price */}
                <Typography
                  variant="h4"
                  align="center"
                  sx={{
                    fontWeight: 'bold',
                    mb: 3,
                    color: '#f39c12',
                  }}
                >
                  ${plan.price}/mo
                </Typography>
                {/* Features */}
                <ul style={{ padding: 0, listStyle: 'none', margin: 0 }}>
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        color: '#4f4f4f',
                        fontSize: '1rem',
                        marginBottom: '0.5rem',
                        textAlign: 'center',
                      }}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              {/* Action Button */}
              <CardActions sx={{ justifyContent: 'center', mt: 'auto' }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: plan.highlight ? '#f39c12' : '#4f4f4f',
                    color: '#fff',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: '#f5f5f5',
                      color: '#4f4f4f',
                    },
                  }}
                >
                  {plan.highlight ? 'Try Pro Plan' : 'Get Started'}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
